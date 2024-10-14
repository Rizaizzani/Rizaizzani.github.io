let intervalId;

function calculateCompleteAge() {
    const birthdate = document.getElementById('birthdate').value;

    if (birthdate) {
        const birthDateObj = new Date(birthdate);
        const currentDate = new Date();

        let years = currentDate.getFullYear() - birthDateObj.getFullYear();
        let months = currentDate.getMonth() - birthDateObj.getMonth();
        let days = currentDate.getDate() - birthDateObj.getDate();
        let hours = currentDate.getHours() - birthDateObj.getHours();
        let minutes = currentDate.getMinutes() - birthDateObj.getMinutes();
        let seconds = currentDate.getSeconds() - birthDateObj.getSeconds();

        // Menangani kasus jika bulan negatif
        if (months < 0) {
            years--;
            months += 12;
        }

        // Menangani kasus jika hari negatif
        if (days < 0) {
            months--;
            const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
            days += previousMonth;
        }

        // Menangani kasus jika jam negatif
        if (hours < 0) {
            days--;
            hours += 24;
        }

        // Menangani kasus jika menit negatif
        if (minutes < 0) {
            hours--;
            minutes += 60;
        }

        // Menangani kasus jika detik negatif
        if (seconds < 0) {
            minutes--;
            seconds += 60;
        }

        document.getElementById('ageDisplay').textContent = 
            `Usia Kamu : ${years} Tahun, ${months} Bulan, ${days} Hari, ${hours} Jam, ${minutes} Menit, dan ${seconds} Detik.`;
    } else {
        document.getElementById('ageDisplay').textContent = 'Harap Masukkan Dengan Benar.';
    }
}

function startAutoCalculate() {
    // Bersihkan interval sebelumnya jika ada
    if (intervalId) {
        clearInterval(intervalId);
    }

    // Jalankan perhitungan setiap detik
    intervalId = setInterval(calculateCompleteAge, 1000);
}

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // Tambahkan leading zero jika jam, menit, atau detik < 10
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;
    
    document.getElementById("clock").innerText = timeString;
}

// Panggil fungsi updateClock setiap detik (1000 ms)
setInterval(updateClock, 1000);

// Jalankan updateClock untuk pertama kali saat halaman dimuat
updateClock();
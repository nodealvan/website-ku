 // Ambil elemen dengan kelas .writer
 const writer = document.querySelector('.writer');

 // Fungsi untuk menambahkan animasi pengetikan pada teks
 function typeWriter(element) {
   const text = element.textContent; // Ambil teks dari elemen
   element.textContent = ''; // Kosongkan teks dari elemen

   let i = 0;
   const interval = setInterval(() => {
     // Tambahkan satu karakter pada setiap interval
     element.textContent += text.charAt(i);
     i++;

     // Hentikan interval ketika semua karakter telah ditampilkan
     if (i > text.length) {
       clearInterval(interval);
     }
   }, 100); // Interval waktu antara penambahan karakter (ms)
 }

 // Panggil fungsi typeWriter dengan elemen .writer sebagai argumen
 typeWriter(writer);
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
    }
});

const messages = [
    "tap dimana aja bibb",
    "HALLO BIIIBB❤️",
    "hehe, mbak cuma bisa buatin codingan sederhana ini buat kamuuu",
    "pas di tanggal 15 Juli ini kamu ulang tahunn kann",
    "selamat ulang tahun ya biyaaa sayanggg",
    "terimakasih bii karna sudah bertahan sampai saat ini",
    "terimakasih karna sudah terus berjuang untuk menjadi pribadi yang lebih baik",
    "selamat atas pencapaian yang kamu dapat selama ini",
    "selalu menjadi pribadi yang ceriaa yaaa",
    "selalu semangat ya bii buat menjalani berbagai rintangan kedepannyaa",
    "semoga setiap langkahmu selalu di permudah sama Allah",
    "makasihh jugaaa karna kamu udah mau temenan sama mbakk🤭🤭🤭",
    "sehat selalu yaa dekkk, wish u all the best",
    "sekali lagi selamat ulang tahun ya biii",
    "i love you, biiib❤️",
    "mbakkk sayangg kamuuu",
    "seleeesaiii 💝"
];

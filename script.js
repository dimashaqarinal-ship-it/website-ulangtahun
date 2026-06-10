const tombol = document.getElementById("btn");
const musik = document.getElementById("musik");

const ucapanList = [
    "🎂 Happy Birthday Salsabila 🎂",
    "💖 Semoga selalu bahagia 💖",
    "🌹 Semoga sehat selalu 🌹",
    "✨ Semoga semua impian tercapai ✨",
    "🎉 Hari ini adalah harimu 🎉",
    "💝 Tetap jadi pribadi yang hebat 💝",
    "🎈 Panjang umur dan sukses selalu 🎈",
    "🥳 Selamat ulang tahun Salsabila 🥳"
];

tombol.addEventListener("click", function () {

    musik.play();

    tombol.style.display = "none";

    for(let i = 0; i < 8; i++){

    const teks = document.createElement("div");

    teks.innerHTML =
        ucapanList[Math.floor(Math.random() * ucapanList.length)];

    teks.classList.add("ucapan");

    teks.style.fontSize =
        (18 + Math.random() * 7) + "px";

    const posisi = [
    {top:"8%", left:"5%"},
    {top:"8%", left:"60%"},

    {top:"28%", left:"3%"},
    {top:"28%", left:"68%"},

    {top:"48%", left:"8%"},
    {top:"48%", left:"65%"},

    {top:"68%", left:"5%"},
    {top:"68%", left:"60%"},

    {top:"85%", left:"10%"},
    {top:"85%", left:"55%"},

    {top:"18%", left:"30%"},
    {top:"58%", left:"35%"}
];

    teks.style.top = posisi[i].top;
    teks.style.left = posisi[i].left;

    const animasi = [
        "kiriKeKanan",
        "kananKeKiri",
        "atasKeBawah",
        "bawahKeAtas"
    ];

    const pilih =
        animasi[Math.floor(Math.random() * animasi.length)];

    teks.style.animation =
        `glow 3s ease-in-out infinite alternate,
         ${pilih} 30s ease-in-out infinite alternate`;

    document.body.appendChild(teks);
}

setInterval(() => {

    const hati = document.createElement("div");

    hati.innerHTML = "❤️";

    hati.classList.add("hati");

    hati.style.left = Math.random() * 100 + "%";

    hati.style.fontSize =
        (15 + Math.random() * 20) + "px";

    document.body.appendChild(hati);

    setTimeout(() => {
        hati.remove();
    }, 10000);

}, 700);

const loveBtn = document.getElementById("loveBtn");
const pesanLove = document.getElementById("pesanLove");

loveBtn.addEventListener("click", () => {

    pesanLove.style.display = "block";

});

function tutupLove(){
    alert("Tombol berfungsi");
    document.getElementById("pesanLove").style.display = "none";
}

document.getElementById("btnTutup").addEventListener("click", () => {
    document.getElementById("pesanLove").style.display = "none";
});

});
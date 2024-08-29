const layar = document.getElementById("layar");
const tombol = document.querySelectorAll(".tombol button");

let angka = "";
let operator = "";

tombol.forEach((tombol) => {
  tombol.addEventListener("click", () => {
    if (tombol.id === "clear") {
      angka = "";
      layar.value = "";
    } else if (tombol.id === "hapus") {
      angka = angka.slice(0, -1);
      layar.value = angka;
    } else if (tombol.id === "samadengan") {
      const hasil = eval(angka.replace("^", "**"));
      layar.value = hasil;
      angka = hasil.toString();
    } else if (
      tombol.id === "tambah" ||
      tombol.id === "kurang" ||
      tombol.id === "kali" ||
      tombol.id === "bagi" ||
      tombol.id === "pangkat"
    ) {
      operator = tombol.id;
      angka += tombol.textContent;
      layar.value = angka;
    } else {
      angka += tombol.textContent;
      layar.value = angka;
    }
  });
});

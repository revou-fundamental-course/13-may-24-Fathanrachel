function myFunction() {
  // Ambil nilai dari input
  var alas = parseFloat(document.getElementById("Alas").value);
  var tinggi = parseFloat(document.getElementById("Tinggi").value);

  // Ambil nilai string dari dokumen html yang sudah ada
  var rumus = document.getElementById("rumus").innerHTML;
  var x = 0.5;

  // Menghitung luas segitiga dari 3 variabel yang sudah diinput
  var Hasil_Perhitungan = x * alas * tinggi;

  // Menggabungkan semua proses yang sudah ada kedalam satu variabel
  var hasilString = rumus + "\nL = " + x + " x " + alas + " x " + tinggi + "\nL = " + Hasil_Perhitungan;

  // outputnya
  document.getElementById("Hasil_Perhitungan").innerText = hasilString;
}
  
  function resetForm() {
    // Atur nilai semua elemen input ke nilai defaultnya
    document.getElementById("Alas").value = "";
    document.getElementById("Tinggi").value = "";
  
    // Atur konten elemen output ke nilai defaultnya
    document.getElementById("Hasil_Perhitungan").innerText = "Hasil: ";
  }
  


  function myFunction2() {
    // Ambil nilai dari input
    var sisi1 = parseFloat(document.getElementById("sisi1").value);
    var sisi2 = parseFloat(document.getElementById("sisi2").value);
    var sisi3 = parseFloat(document.getElementById("sisi3").value);

    // Ambil nilai string dari dokumen html yang sudah ada
    var rumus1 = document.getElementById("rumus1").innerHTML;

    // Menjumlahkan perhitungan keliling segitiga dari 2 variabel yang sudah diinput
    var Hasil_Perhitungan2 = sisi1 + sisi2 + sisi3;

    // Menggabungkan semua proses yang sudah ada kedalam satu variabel
    var hasilString2 = rumus1 + "\nK = " + sisi1 + " + " + sisi2 + " + " + sisi3 + "\nK = " + Hasil_Perhitungan2;

    // outputnya
    document.getElementById("Hasil_Perhitungan2").innerText = hasilString2;
  }
  
  function resetForm2() {
    // Atur nilai semua elemen input ke nilai defaultnya
    document.getElementById("sisi1").value = "";
    document.getElementById("sisi2").value = "";
    document.getElementById("sisi3").value = "";
  
    // Atur konten elemen output ke nilai defaultnya
    document.getElementById("Hasil_Perhitungan2").innerText = "Hasil: ";
  }
  
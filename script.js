function cekKelulusan() {
      var nilai = Number(document.getElementById("nilai").value);
      var hasil = document.getElementById("hasil");
      const KKM = 76; // Nilai KKM yang ditentukan
      if (nilai >= KKM) {
        hasil.innerHTML = "Selamat! Kamu Lulus";
      } else {
        hasil.innerHTML = "Maaf, Kamu Tidak Lulus";
      }
    }
    function tentukanGrade(nilai) {
  if (nilai >= 90) return 'A';
  if (nilai >= 80) return 'B';
  if (nilai >= 70) return 'C';
  if (nilai >= 60) return 'D';
  return 'E';
}
    

    function prosesNilai() {
  const namaInput = document.getElementById('nama');
  const nilaiInput = document.getElementById('nilai');
  const errNama = document.getElementById('errNama');
  const errNilai = document.getElementById('errNilai');
 
  const nama = namaInput.value.trim();
  const nilaiRaw = nilaiInput.value.trim();
  const nilai = parseFloat(nilaiRaw);
 
  let valid = true;
 
  if (nama === '') {
    errNama.style.display = 'block';
    valid = false;
  } else {
    errNama.style.display = 'none';
  }
 
  if (nilaiRaw === '') {
    errNilai.style.display = 'block';
    valid = false;
  } else if (isNaN(nilai) || nilai < 0 || nilai > 100) {
    errNilai.style.display = 'block';
    valid = false;
  } else {
    errNilai.style.display = 'none';
  }
 
  if (valid) {
    cekKelulusan();
  }
}
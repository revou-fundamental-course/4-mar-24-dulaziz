function hitungBmi() {
  let beratBadan = parseInt(document.getElementById("berat-badan").value);
  let usia = document.getElementById("usia").value;
  let tinggiBadan = parseInt(document.getElementById("tinggi-badan").value);

  let hasil = beratBadan / (tinggiBadan ** 2 / 10000);

  document.getElementById("hasil").innerHTML = hasil.toFixed(1);

  if (hasil <= 18.5) {
    document.getElementById("alert1").innerHTML = "Kurang Berat Badan";
    document.getElementById("alert2").innerHTML =
      "Anda memiliki kekurangan berat badan";
  } else if (hasil >= 18.5 && hasil <= 24.9) {
    document.getElementById("alert1").innerHTML = "Normal (Ideal)";
    document.getElementById("alert2").innerHTML =
      "Anda memiliki berat badan ideal";
  } else if (hasil >= 25.0 && hasil <= 29.9) {
    document.getElementById("alert1").innerHTML = "Kelebihan Berat Badan";
    document.getElementById("alert2").innerHTML =
      "Anda memiliki kelebihan berat badan";
  } else {
    document.getElementById("alert1").innerHTML = "Kemungkinan (Obesitas)";
    document.getElementById("alert2").innerHTML =
      "Anda kemungkinan memiliki berat badan obesitas";
  }
}

function reset() {
  window.location.reload();
}

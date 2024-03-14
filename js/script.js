function hitungBmi() {
  let beratBadan = parseInt(document.getElementById("berat-badan").value);
  let usia = parseInt(document.getElementById("usia").value);
  let tinggiBadan = parseInt(document.getElementById("tinggi-badan").value);

  //Validation
  if (isNaN(beratBadan)) {
    document.getElementById("msg-bb").innerHTML = "Mohon isi berat badan anda";
  } else if (isNaN(usia)) {
    document.getElementById("msg-u").innerHTML = "Mohon isi usia anda";
  } else if (isNaN(tinggiBadan)) {
    document.getElementById("msg-tb").innerHTML = "Mohon isi tinggi badan anda";
  }

  //Hitung BMI
  let hasil = beratBadan / (tinggiBadan ** 2 / 10000);

  document.getElementById("hasil").innerHTML = hasil.toFixed(1);

  if (hasil <= 18.5) {
    document.getElementById("alert1").innerHTML = "Kurang Berat Badan";
    document.getElementById("alert2").innerHTML =
      "Anda memiliki kekurangan berat badan";
    document.getElementById("dari").innerHTML = 10;
    document.getElementById("hingga").innerHTML = 18.5;
  } else if (hasil >= 18.5 && hasil <= 24.9) {
    document.getElementById("alert1").innerHTML = "Normal (Ideal)";
    document.getElementById("alert2").innerHTML =
      "Anda memiliki berat badan ideal";
    document.getElementById("dari").innerHTML = 18.5;
    document.getElementById("hingga").innerHTML = 24.9;
  } else if (hasil >= 25.0 && hasil <= 29.9) {
    document.getElementById("alert1").innerHTML = "Kelebihan Berat Badan";
    document.getElementById("alert2").innerHTML =
      "Anda memiliki kelebihan berat badan";
    document.getElementById("dari").innerHTML = 25.0;
    document.getElementById("hingga").innerHTML = 29.9;
  } else {
    document.getElementById("alert1").innerHTML = "Kemungkinan (Obesitas)";
    document.getElementById("alert2").innerHTML =
      "Anda kemungkinan memiliki berat badan obesitas";
    document.getElementById("dari").innerHTML = 30;
    document.getElementById("hingga").innerHTML = "lebih dari 30";
  }
}

//Reset
function reset() {
  window.location.reload();
}

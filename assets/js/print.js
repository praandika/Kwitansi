// Passing value to body
document.getElementById("nama").value = `${localStorage.getItem("nama")}`;
document.getElementById("motor").value = `${localStorage.getItem("motor")}`;
document.getElementById("warna").value = `${localStorage.getItem("warna")}`;
document.getElementById("nosin").value = `${localStorage.getItem("nosin")}`;
document.getElementById("noka").value = `${localStorage.getItem("noka")}`;
document.getElementById("uangmuka").value = `${localStorage.getItem("uangmuka")}`;
document.getElementById("nominal").value = `${localStorage.getItem("nominal")}`;

function getTanggal(){
    const today = new Date;
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (mm == 1) {
        mm = "Januari";
    } else if(mm == 2) {
        mm = "Februari";
    } else if(mm == 3) {
        mm = "Maret";
    } else if(mm == 4) {
        mm = "April";
    } else if(mm == 5) {
        mm = "May";
    } else if(mm == 6) {
        mm = "Juni";
    } else if(mm == 7) {
        mm = "Juli";
    } else if(mm == 8) {
        mm = "Agustus";
    } else if(mm == 9) {
        mm = "September";
    } else if(mm == 10) {
        mm = "Oktober";
    } else if(mm == 11) {
        mm = "November";
    } else if(mm == 12) {
        mm = "Desember";
    } else {
        mm = "Gak dapet bulannya"
    }
    document.getElementById("tanggal").setAttribute("value",dd);
    document.getElementById("bulan").setAttribute("value",mm);
    document.getElementById("tahun").setAttribute("value",yyyy);
}

function saveData(){
    // Get Value
    tanggal = document.getElementById("tanggal").value;
    bulan = document.getElementById("bulan").value;
    tahun = document.getElementById("tahun").value;
    nama = document.getElementById("nama").value;
    warna = document.getElementById("warna").value;
    noka = document.getElementById("noka").value;
    nosin = document.getElementById("nosin").value;
    motor = document.getElementById("motor").value;
    uangmuka = document.getElementById("uangmuka").value;
    nominal = document.getElementById("nominal").value;
    localStorage.setItem("tanggal", tanggal);
    localStorage.setItem("bulan", bulan);
    localStorage.setItem("tahun", tahun);
    localStorage.setItem("nama", nama);
    localStorage.setItem("motor", motor);
    localStorage.setItem("warna", warna);
    localStorage.setItem("noka", noka);
    localStorage.setItem("nosin", nosin);
    localStorage.setItem("uangmuka", uangmuka);
    localStorage.setItem("nominal", nominal);
}
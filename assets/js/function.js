function pembilang(nilai){
    nilai = Math.abs(nilai);
    var simpanNilaiBagi=0;
    var huruf = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
    var temp="";

    if (nilai < 12) {
        temp = " "+huruf[nilai];
    }
    else if (nilai <20) {
        temp = pembilang(nilai - 10) + " Belas";
    }
    else if (nilai < 100) {
        simpanNilaiBagi = Math.floor(nilai/10);
        temp = pembilang(simpanNilaiBagi)+" Puluh"+ pembilang(nilai % 10);
    }
    else if (nilai < 200) {
        temp = " Seratus" + pembilang(nilai - 100);
    }
    else if (nilai < 1000) {
        simpanNilaiBagi = Math.floor(nilai/100);
        temp = pembilang(simpanNilaiBagi) + " Ratus" + pembilang(nilai % 100);
    }
    else if (nilai < 2000) {
        temp = " Seribu" + pembilang(nilai - 1000);
    }
    else if (nilai < 1000000) {
        simpanNilaiBagi = Math.floor(nilai/1000);
        temp = pembilang(simpanNilaiBagi) + " Ribu" + pembilang(nilai % 1000);
    } 
    else if (nilai < 1000000000) {
        simpanNilaiBagi = Math.floor(nilai/1000000);
        temp =pembilang(simpanNilaiBagi) + " Juta" + pembilang(nilai % 1000000);
    } 
    else if (nilai < 1000000000000) {
        simpanNilaiBagi = Math.floor(nilai/1000000000);
        temp = pembilang(simpanNilaiBagi) + " Miliar" + pembilang(nilai % 1000000000);
    } 
    else if (nilai < 1000000000000000) {
        simpanNilaiBagi = Math.floor(nilai/1000000000000);
        temp = pembilang(nilai/1000000000000) + " Triliun" + pembilang(nilai % 1000000000000);
    }

    return temp;
}

// Custom function to separate comma
function formatNumber(val) {
// remove sign if negative
var sign = 1;
if (val < 0) {
    sign = -1;
    val = -val;
}
// trim the number decimal point if it exists
let num = val.toString().includes('.') ? val.toString().split('.')[0] : val.toString();
let len = num.toString().length;
let result = '';
let count = 1;

for (let i = len - 1; i >= 0; i--) {
    result = num.toString()[i] + result;
    if (count % 3 === 0 && count !== 0 && i !== 0) {
    result = '.' + result;
    }
    count++;
}

// add number after decimal point
if (val.toString().includes('.')) {
    result = result + '.' + val.toString().split('.')[1];
}
// return result with - sign if negative
return sign < 0 ? '-' + result : result;
}
alert("Alisher chet el safariga bora oladimi?");
var userMoney = Number(prompt("Qancha pulingiz bor?", 1));

var bilet = 9433.34 * 500;
var mehmonxona = 9433.34 * 250;
var muzey = 10354.03 * 120;
var jami = bilet + mehmonxona + muzey;

if (userMoney >= jami) {
  alert("Oq yo’l, Alisher!");
}else{
  alert("Alisher, ozgina sabr qilish kerak bo’lar ekan.");
}




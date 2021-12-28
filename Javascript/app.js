// let price = "100"

// // Esitse

// console.log(price==1);     //esit degil false
// console.log(price==100);   //deger olarak esit type olarak deqil true (type check yok)
// console.log(price===100);  //type checking var false olur

// Kullanici bilgisi varsa ekrana ismini yazdir

// eger (username.length >)(console.log(username))

// let userName = prompt("Type your name:");

// if (userName.length > 0) {
// 	console.log(`Your username ${userName}`);
// } else {
// 	console.log("There is no name");
// }

let boolean;

const isBooleanTrue = boolean ? true : false;

console.log(isBooleanTrue);

console.log(boolean);

var money;
    var canBuy = 
        (money < 17) ? "Satın alamazsın..":
        (money > 30) ? "Satın alabilirsin..":
        "Para miktarını girmen gerekmektedir..";

    console.log(canBuy) 
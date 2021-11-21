let cart = [
  { id: 1, productName: "Telefon", quantity: 5, unitPrice: 4500 },
  { id: 2, productName: "Kılıf", quantity: 8, unitPrice: 80 },
  { id: 3, productName: "Kulaklık", quantity: 2, unitPrice: 100 },
  { id: 4, productName: "Telefon Şarj Cihazı", quantity: 3, unitPrice: 200 },
  { id: 5, productName: "Bilgisayar", quantity: 1, unitPrice: 15000 },
  { id: 6, productName: "Laptop Fanı", quantity: 7, unitPrice: 350 },
];

function addToCart(cart) {
  cart.push({ id: 7, productName: "Saat", quantity: 10, unitPrice: 400 });
}

addToCart(cart);
//console.log(cart);

let number = 10;
function total(number) {
  number += 1;
}

//console.log(number);

// map fonksiyonu
cart.map((product) => {
    console.log(
      product.productName + " : " + product.unitPrice * product.quantity + " TL"
    );
  });

// filter fonksiyonu
let quantityOver = cart.filter((product) => product.quantity > 2);
let productFilter = cart.filter(
  (product) => product.productName == "Telefon" || product.unitPrice > 1000
);

console.log(quantityOver);
console.log(productFilter);

// reduce
let totalPrice = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0);

console.log(totalPrice);

function addToCart(productName = "Kalem", quantity = 1) {
  console.log(
    productName +
      " " +
      "Sepete Eklendi." +
      " " +
      "Ürün Sayısı :" +
      " " +
      quantity
  );
}

let product1 = "Kulaklık";
let product2 = "Telefon";
addToCart(product1, 5);
addToCart(product2, 3);
addToCart();

// Değişkene fonksiyon ataıyoruz
let sayHi = () => {
  console.log("Hello World");
};

sayHi();

let sayHi2 = function () {
  console.log("Hello World 2");
};

sayHi2();

function addToCard2(productName, quantity, unitPrice) {}

function addToCard3(product) {
  console.log(
    "Ürün : " +
      product.productName +
      " " +
      "Fiyat : " +
      product.unitPrice +
      " " +
      "Adet : " +
      product.quantity
  );
}

let product3 = { productName: "Kulaklık", unitPrice: "100", quantity: 4 };
addToCard3(product3);

let product4 = { productName: "Kılıf", unitPrice: "50", quantity: 2 };
let product5 = { productName: "Şarj Kablosu", unitPrice: "150", quantity: 3 };

product4 = product5;
product4.productName = "SD Kart";
console.log(product5.productName); // SD Kart olur

let sayi1 = 10;
let sayi2 = 20;
sayi1 = sayi2;
sayi2 = 100;
console.log(sayi1, sayi2);

// Obje, liste, array referans tip
// string, int değer tip

function addToCard4(products) {
  console.log(productArray);
}

let productArray = [
  { productName: "Kalem", unitPrice: 20, quantity: 15 },
  { productName: "Silgi", unitPrice: 5, quantity: 9 },
  { productName: "Defter", unitPrice: 40, quantity: 10 },
  { productName: "Kitap", unitPrice: 90, quantity: 5 },
];

addToCard4(productArray);

function add(number1, number2) {
  console.log(number1 + number2);
}

function add2(number1, number2, number3) {
  console.log(number1 + number2 + number3);
}

// rest --> fonksiyonda başka parametre varsa rest sona alınır!!(rest toparlar)
function add3(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  console.log(total);
}

//add(5, 8);
//add2(10, 20, 30);

add3(50, 40);
add3(40, 70, 210);
add3(5, 4, 8, 9, 10);

// spread --> ayrıştırır
//console.log(Math.max(10,50,70,90,5,4,100))
let numbers = [10, 50, 70, 90, 5, 4, 100, 600];
console.log(Math.max(...numbers));

//destructuring --> array elemanlarını parçalara ayırır.
let [
  karadeniz,
  icAnadolu,
  marmara,
  [karadenizSehirleri, icAnadoluSehirleri, marmaraSehirleri],
] = [
  { name: "Karadeniz", population: "7M" },
  { name: "İç Anadolu", population: "12M" },
  { name: "Marmara", population: "20M" },
  [
    ["Giresun", "Ordu"],
    ["Ankara", "Konya"],
    ["İstanbul", "Bursa"],
  ],
];
console.log(karadeniz.name, karadeniz.population);
console.log(icAnadolu.name, icAnadolu.population);
console.log(karadenizSehirleri);
console.log(marmaraSehirleri);

let newProductName, newUnitPrice, newQuantity;
({
  productName: newProductName,
  unitPrice: newUnitPrice,
  quantity: newQuantity,
} = { productName: "Kulaklık", unitPrice: 95, quantity: 4 });
console.log(newProductName, newUnitPrice);

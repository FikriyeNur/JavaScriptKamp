console.log('Merhaba Kodlama.io')

// JS type safe değildir!!
let dolarDun = 9.20;
let dolarBugun = 9.30;

console.log(dolarDun, 'dolar dün');

const euroDun = 10.45;

console.log(euroDun, 'euro dün')

let konutKredileri = ['Konut Kredisi', 'Emlak Konut Kredisi', 'Kamu Konut Kredisi', 'Özel Konut Kredisi'];
console.log(konutKredileri, 'krediler')

for (let i = 0; i  < konutKredileri.length; i ++) {
    const element = konutKredileri[i];
    console.log(element)
}
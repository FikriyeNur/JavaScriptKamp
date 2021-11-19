//console.log('Merhaba Kodlama.io')

// JS type safe değildir!!
let dolarDun = 9.20;
let dolarBugun = 9.30;

//console.log(dolarDun, 'dolar dün');

const euroDun = 10.45;

//console.log(euroDun, 'euro dün')

let konutKredileri = ['Konut Kredisi', 'Emlak Konut Kredisi', 'Kamu Konut Kredisi', 'Özel Konut Kredisi'];
//console.log(konutKredileri, 'krediler')

for (let i = 0; i  < konutKredileri.length; i ++) {
    const element = konutKredileri[i];
    //console.log(element)
}

/// Ödev Videosu Başlangıç
let student = {id:1, name:'Fikriye Nur'}

function save(puan = 10, ogrenci) {
    //console.log(ogrenci.name + ' : '+ puan);
}

save(undefined, student);

let students = ['Fikriye Nur Harmandar', 'Engin Demiroğ', 'Anıl Aksoy', 'Pelin Demir'];
//console.log(students);

let students2 = [student, {id:2, name:'Büşra Deniz'}, 'Deneme', {city:'İstanbul'}]
//console.log(students2);

// rest
// c# karşlığı params
// java da ki karşılığı varArgs
let showProducts = function (id, ...products) {
    console.log(id);
    console.log(products[0]);
}

//console.log(typeof showProducts)
//showProducts(10, ['Elma', 'Armut', 'Çilek', 'Karpuz']);

//spread
//console.log(Math.max(1,2,3,4,50,8,9,60))
let points = [1,2,3,4,50,8,9,60];
//console.log(Math.max(...points));
//console.log(...'ABC', 'D', ...'EFG', 'H')

//destructuring
let populations = [10000, 20000, 30000, [40000, 10000]];
let [small, medium, high, [veryhigh, maximum]] =  populations;
//console.log(small);
// console.log(medium);
// console.log(high);
// console.log(veryhigh);
// console.log(maximum);

function someFunction([small1, medium1], number) {
    // console.log(small1)
    // console.log(medium1)
}

someFunction(populations);

let category = {id:1, name:'İçecek'}

// console.log(category.id);
// console.log(category['name'])

let {id, cname} = category;
// console.log(id);
// console.log(cname); 

/// Ödev Videosu Bitiş

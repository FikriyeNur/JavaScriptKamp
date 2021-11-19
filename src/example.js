// 1. istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
function findPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let count = 0;
    for (let x = 1; x <= numbers[i]; x++) {
      if (numbers[i] % x == 0) {
        count++;
      }
    }

    if (count == 2) {
      console.log("Asal Sayı : " + numbers[i]);
    }
  }
}

//findPrime(2,5,8,9);

// 2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
function findFriendNumber(number1, number2) {
  let total1 = 0;
  let total2 = 0;
  for (let i = 1; i < number1; i++) {
    if (number1 % i == 0) {
      total1 = total1 + i;
    }
  }

  for (let i = 1; i < number2; i++) {
    if (number2 % i == 0) {
      total2 = total2 + i;
    }
  }

  if (number1 == total2 && number2 == total1) {
    console.log(number1 + " ve " + number2 + " " + "arkadaş sayılardır");
  } else {
    console.log(number1 + " ve " + number2 + " " + "arkadaş sayı değildir!");
  }
}

//findFriendNumber(1184, 1210);

// 3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
function perfectNumber() {
  for (let i = 0; i < 1000; i++) {
    let total = 0;
    for (let x = 0; x < i; x++) {
      if (i % x == 0) {
        total = total + x;
      }
    }

    if (total == i) {
      console.log("Mükemmel Sayı : " + i);
    }
  }
}

perfectNumber();

// 4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
function primeNumbers() {
  for (let i = 0; i < 8129; i++) {
    let count = 0;
    for (let x = 1; x <= i; x++) {
      if (i % x == 0) {
        count++;
      }
    }

    if (count == 2) {
      console.log("Asal Sayı : " + i);
    }
  }
}

//primeNumbers();

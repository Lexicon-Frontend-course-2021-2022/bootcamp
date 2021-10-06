// The Basics
// 1. Gör en array som innehåller 5 st olika frukter av datatypen string.

let fruits = ['apple', 'orange', 'banana', 'pineapple', 'grapes'];
console.log(fruits);

// 2. gör en array som innehåller 3 olika datatyper, ex.string, number, array.

let mixed = [1, true, { iAm: 'An object' }];
console.log(mixed);

// let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
// 3. console.log() hur många objekt arrayen ovan innehåller.

let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
console.log(animals.length);

// 4. I arrayen ovan, hämta cat.

let cat = animals[0];
console.log(cat);

// 5. I arrayen ovan, hämta funky chihuahua.

let funkyChihuahua = animals[3];
console.log(funkyChihuahua);

// 6. I arrayen ovan, byt ut hamster mot tiger.

animals[1] = 'tiger';
console.log(animals);

// let a = [1, 2, 3];
// let b = [4, 5, 6];
// 7. Lägg ihop ovanstående arrayer.
let a = [1, 2, 3];
let b = [4, 5, 6];

let result = [...a, ...b];
console.log(result);

// let a = [1, 2, 3, 7, 8, 9];
// let b = [4, 5, 6];
// 8. Merga ner array b på index 3 array a.
a = [1, 2, 3, 7, 8, 9];
b = [4, 5, 6];

a.splice(3, 0, ...b);
console.log(a);

// let arr = ['a', 'b', 'c'];
// 9. Klona ovanstående array.

let arr = ['a', 'b', 'c'];
result = [...arr];
console.log(result);

//   Methods
//   .push(), .unshift(), .pop(), .shift(), .splice(), .includes(), .indexOf(), .substring()
// let fruits = ['kiwi', 'apple', 'pear'];
// 10. Lägg till en frukt i slutet av arrayen ovan.

fruits = ['kiwi', 'apple', 'pear'];
fruits.push('banana');
console.log(fruits);

// 11. Lägg till en frukt i början av arrayen ovan.

fruits = ['kiwi', 'apple', 'pear'];
fruits.unshift('banana');
console.log(fruits);

// 12. I arrayen ovan, ta bort sista frukten i arrayen.

fruits = ['kiwi', 'apple', 'pear'];
fruits.pop()
console.log(fruits);

// 13. I arrayen ovan, ta bort första frukten i arrayen.

fruits = ['kiwi', 'apple', 'pear'];
fruits.shift()
console.log(fruits);

// 14. Sätt in en frukt i arrayen ovan på index 1.

fruits = ['kiwi', 'apple', 'pear'];
fruits.splice(1, 0, 'banana');
console.log(fruits);

// 15. Sätt in tre frukter i arrayen ovan på index 2.

fruits = ['kiwi', 'apple', 'pear'];
fruits.splice(2, 0, 'banana', 'pineapple', 'grapes');
// Eller med splice operator (...)
// fruits.splice(2, 0, ...['banana', 'pineapple', 'grapes']);
console.log(fruits);

// let names = ['David', 'Christoffer', 'Johan', 'Maja']
// 16. I arrayen ovan, ta bort Christoffer och Johan.

// let names = ['David', 'Christoffer', 'Johan', 'Maja']
let names = ['David', 'Christoffer', 'Johan', 'Maja']
names.splice(1, 2);
console.log(names);

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 17. Spegelvänd på arrayen ovan.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
result = nums.reverse();
console.log(result);

// let str = 'Supercalifragilisticexpialidocious';
// 18. Kika om strängen ovan innehåller bokstaven n.
let str = 'Supercalifragilisticexpialidocious';
result = str.indexOf('n') === -1 ? false : true;
console.log(result);

// 19. Kika om strängen ovan innehåller bokstaven x.
result = str.indexOf('x') === -1 ? false : true;
console.log(result);

// 20. I ovanstående array, hitta vilket position första förekomsten av p har.
result = str.indexOf('p')
console.log(result);

// 21. I strängen ovan, plocka fram de 5 första tecknena.
result = str.slice(0, 5);
console.log(result);

// 22. I strängen ovan, plocka fram de 7 sista tecknena.
result = str.slice(-7);
console.log(result);

// Advanced methods(high order methods)
//   .filter()
// let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
// 23. I arrayen ovan, filtera fram alla nummer över 5.

let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
result = numArray.filter(num => num > 5);
console.log(result);

// 24. I arrayen ovan, filtera fram alla nummer under 5.
result = numArray.filter(num => num < 5);
console.log(result);

// let persons = [
//   {
//     name: "Felicia",
//     age: 12
//   },
//   {
//     name: "Pelle",
//     age: 20
//   },
//   {
//     name: "Peter",
//     age: 59
//   },
//   {
//     name: "Anna",
//     age: 32
//   },
//   {
//     name: "Jocke",
//     age: 18
//   },
//   {
//     name: "Ella",
//     age: 3
//   }
// ]
// 25. Skriv ut alla namn som är 18 år eller över från arrayen ovan.
let persons = [
  {
    name: "Felicia",
    age: 12
  },
  {
    name: "Pelle",
    age: 20
  },
  {
    name: "Peter",
    age: 59
  },
  {
    name: "Anna",
    age: 32
  },
  {
    name: "Jocke",
    age: 18
  },
  {
    name: "Ella",
    age: 3
  }
]

result = persons.filter(person => person.age >= 18);
console.log(result);

// 26. Skriv ut alla namn som är under 18 år från arrayen ovan.

persons = [
  {
    name: "Felicia",
    age: 12
  },
  {
    name: "Pelle",
    age: 20
  },
  {
    name: "Peter",
    age: 59
  },
  {
    name: "Anna",
    age: 32
  },
  {
    name: "Jocke",
    age: 18
  },
  {
    name: "Ella",
    age: 3
  }
]

result = persons.filter(person => person.age < 18);
console.log(result);

// .sort()
// let arr = ['beta', 'alfa', 'gamma'];
// 27. Sortera ovanstående array alfabetisk.
arr = ['beta', 'alfa', 'gamma'];
result = arr.sort();
console.log(result);

// let nums = [1, 5, 7, 9, 3, 4, 2, 6, 8];
// 28. Sortera ovanstående array numeriskt.

nums = [1, 5, 7, 9, 3, 4, 2, 6, 8];
result = nums.sort((a, b) => a - b);
console.log(result);

// 29. I person - arrayen ovan, sortera objekten efter ålder, yngst först.
persons = [
  {
    name: "Felicia",
    age: 12
  },
  {
    name: "Pelle",
    age: 20
  },
  {
    name: "Peter",
    age: 59
  },
  {
    name: "Anna",
    age: 32
  },
  {
    name: "Jocke",
    age: 18
  },
  {
    name: "Ella",
    age: 3
  }
]

result = [...persons.sort((a, b) => a.age - b.age)];
console.log(result);

// 30. I person - arrayen ovan, sortera objekten efter ålder, äldst först.
persons = [
  {
    name: "Felicia",
    age: 12
  },
  {
    name: "Pelle",
    age: 20
  },
  {
    name: "Peter",
    age: 59
  },
  {
    name: "Anna",
    age: 32
  },
  {
    name: "Jocke",
    age: 18
  },
  {
    name: "Ella",
    age: 3
  }
]

result = [...persons.sort((a, b) => b.age - a.age)];
console.log(result);

// 31. I person - arrayen ovan, sortera objekten i bokstavsordning efter deras namn
persons = [
  {
    name: "Felicia",
    age: 12
  },
  {
    name: "Pelle",
    age: 20
  },
  {
    name: "Peter",
    age: 59
  },
  {
    name: "Anna",
    age: 32
  },
  {
    name: "Jocke",
    age: 18
  },
  {
    name: "Ella",
    age: 3
  }
]

result = [...persons.sort((a, b) => a.name > b.name ? 0 : -1)];
console.log(result);

//   .map()
// 32. I person - arrayen ovan, gör om alla namn till versaler.
persons = [
  {
    name: "Felicia",
    age: 12
  },
  {
    name: "Pelle",
    age: 20
  },
  {
    name: "Peter",
    age: 59
  },
  {
    name: "Anna",
    age: 32
  },
  {
    name: "Jocke",
    age: 18
  },
  {
    name: "Ella",
    age: 3
  }
]

persons.map((person) => { person.name = person.name.toUpperCase(); return person; });
console.log(persons);

// 33. I person - arrayen ovan, spegelvänd alla namn.
persons = [
  {
    name: "Felicia",
    age: 12
  },
  {
    name: "Pelle",
    age: 20
  },
  {
    name: "Peter",
    age: 59
  },
  {
    name: "Anna",
    age: 32
  },
  {
    name: "Jocke",
    age: 18
  },
  {
    name: "Ella",
    age: 3
  }
]
result = [...persons.map((person) => { person.name = person.name.split('').reverse().join(''); return person; })];
console.log(result);

// Loop arrays
// let fruits = ['apelsin', 'päron', 'äpple', 'kiwi'];
// 34. Loopa ut följande array med en forEach() - loop.console.log() varje ord.
fruits = ['apelsin', 'päron', 'äpple', 'kiwi'];

fruits.forEach(fruit => {
  console.log(fruit);
});

// 35. Loopa ut följande array med en for of - loop.console.log() varje ord.

for (fruit of fruits) {
  console.log(fruit);
};

// 36. Loopa ut följande array med en for -loop.console.log() varje ord.
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
};

// 37. Loopa ut följande array.För varje varv i loopen ska du också skriva ut index.ex:
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i} - ${fruits[i]}`);
};

// 0 - apelsin
// 1 - päron
// ...
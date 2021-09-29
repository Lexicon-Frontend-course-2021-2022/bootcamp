
// 1. Skapa en loop som itererar 1000 varv. För varje iteration ska du console.log() vilket varv du är på.
for (let i = 0; i < 1000; i++) {
    console.log(`varv ${i + 1} (i = ${i})`);
}

// 2. Skapa en loop som räknar ner från 100 till 0. För varje varv ska du console.log() vilket varv du är på.
for (let i = 100; i >= 0; i--) {
    console.log(`i = ${i}`);
}

// 4. Loopa ut ovanstående array med en for-loop. För varje varv ska du console.log() innehållet ( frukten ).
let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i} = ${fruits[i]}`);
}

// 5. Saknas?

// 6. Loopa ut ovanstående array och console.log() varje pryl. (For .. of ..) Googla!
let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
for (const thing of things) {
    console.log(thing);
}

// 7. Loopa ut ovanstående array och console.log() varje pryl.
let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
things.forEach(thing => {
    console.log(thing);
})

// 8. Loopa ut ovanstående array och console.log() varje pryl samt vilken position i arrayen den har.
let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
things.forEach((thing, index) => {
    console.log(index, thing);
})

// 9. Skapa en while-loop som kör 1000 varv. console.log() ut varje varv.
let counter = 0;
while (counter != 1000) {
    console.log(counter++);
}

// 10. Generera en kortlek med 52 kort där varje kort innehåller en färg ( suite ) och ett värde mellan 2 och 14 ( ess ). Ex.
// NOTE: Jag lade till klädda kort (ie. [2, ..., 10, knight, queen, king, ace] of [suite]) bara för att jag vill :D
let deck = [];
const suites = [
    "hearts",
    "spades",
    "clubs",
    "diamonds"
];
const friendlyNames = [
    null, null,                         // Placeholders. We never use index 0 & 1
    2, 3, 4, 5, 6, 7, 8, 9, 10,         // Numeric cards
    "knight", "queen", "king", "ace"    // Named cards
];
for (let suite = 0; suite < suites.length; suite++) {
    for (let cardValue = 2; cardValue <= 14; cardValue++) {
        deck.push(` ${friendlyNames[cardValue]} of ${suites[suite]}`);
    }
}
console.log(deck);

// Eller ännu enklare (Men då missar vi möjligheten att använda cardValue om vi skulle behöva det av någon anledning)
let deck = [];
const suites = ["hearts", "spades", "clubs", "diamonds"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "knight", "queen", "king", "ace"];
for (const suite of suites) {
    for (const value of values) {
        deck.push(value + ' of ' + suite);
    }
}
console.log(deck);


// 11. Loopa ut samtliga vänners favoritfrukter med en console.log().
let friends = [
    {
        name: 'Sixten',
        likes: [
            'bananas',
            'strawberries',
            'blueberries'
        ]
    },
    {
        name: 'Khalid',
        likes: [
            'papaya',
            'pear',
            'pineapple'
        ]
    },
    {
        name: 'Lisa',
        likes: [
            'raspberries',
            'watermelon',
            'apple'
        ]
    }
]
friends.forEach(friend => {
    console.log(`${friend.name} likes the following fruits:`);
    friend.likes.forEach(fruit => {
        console.log(' * ' + fruit);
    })
})


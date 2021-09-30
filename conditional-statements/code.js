// If

// Ta med hjälp av en if-sats reda på om talet a är större än b.

let a = 10; let b = 20;

if (a > b) {
    console.log(`${a} är större än ${b}`);
}

// Ta med hjälp av en if-sats reda på om a är lika b.

a = 'apple'; b = 'pear';

if (a === b) {
    console.log(`${a} är samma som ${b}`);
}

// Ta med hjälp av en if-sats reda på om a inte är lika b.

a = 'apple'; b = 'pear';

if (a !== b) {
    console.log(`${a} är inte samma som ${b}`);
}

// Else if

// Biggest: 
// Gör en funktion som heter getBiggest(a,b) som tar emot två stycken numeriska värden. 
// Funktionen ska utvärdera vilket tal som är störst och returnera det.

const biggest = (a, b) => {
    if (a > b)
        return a;
    else
        return b;
}

const biggest2 = (a, b) => {
    return a > b ? a : b;
}

// Even or not: Gör en funktion som tar ett number som argument. Ta reda på om talet är jämt eller udda.

const isEven = (num) => {
    if (num % 2)
        return false;
    else
        return true;
}

const isEven2 = (num) => {
    return num % 2 ? false : true;
}

const isEven3 = (num) => {
    return !(num % 2);
}

// Lisebergsvakten: 
// Gör en funktion som ska sitta i en sensor på lisebergs åkattration Helix. 
// För att få åka helix ska man vara minst 150cm lång. Funktionen ska returnera true eller false.

const longEnough = (length) => {
    if (length < 150)
        return false;
    else
        return true;
}

const longEnough2 = (length) => {
    return length >= 150;
}

// Lisebergsvakten 2 
// På Liseberg finns 4 olika åkband; small, medium, large och platinum. 
// För att få åka Balder krävs large och platinum. 
// Gör en funktion som tar argumentent ridePass och returnera true eller false.
const balderOkToRide = (ridePass) => {
    if (ridePass === "large" || ridePass === "platinum")
        return true;
    else
        return false;
}

const balderOkToRide2 = (ridePass) => {
    return (ridePass === "large" || ridePass === "platinum");
}

const balderOkToRide3 = (ridePass) => {
    const allowedPasses = {
        large: true,
        platinum: true
    }
    return ridePass in allowedPasses;
}

const balderOkToRide4 = (ridePass) => {
    const allowedPasses = [
        "large",
        "platinum"
    ];
    for (pass in allowedPasses) {
        if (ridePass === allowedPasses[pass])
            return true;
    }
    return false;
}

// BMI kalkylator: 
// BMI ( Body Mass Index ) sägs vara ett hälsomått som visar på under eller övervikt. 
// Det bör dock tas med en nypa salt då vi alla människor är unika ( och awesome! ).
// Formeln för BMI är följande:
// (kroppsvikten i kg / kroppslängden i meter) * 2 
// NOTE: Really (kg / (cm)^2)

// Resultat från formeln delas in i olika viktklasser.
// BMI                      Klassificering
// < 18,5                   Undervikt
// 18,5 – 25                Normalvikt
// 25 – 30                  Övervikt
// 30 >                     Fetma
//
// Skriv en funktion som tar en persons längd i cm samt vikt i kg och returnerar en BMI-klassificering.

const bmiCalculator = (height, weight) => {
    const bmi = (weight / ((height / 100) ^ 2));

    if (bmi < 18.5)
        return "undervikt";
    else if (bmi <= 25)
        return "normalvikt";
    else if (bmi <= 30)
        return "övervikt";
    else
        return "fetma";
}

// Switch

// Weekdays
// Gör en funktion som tar ett nummer ( 1-7 ) och returnerar vilken veckodag numret motsvarar. 
// Ex. 1 = måndag, 3 = untzdag. Om numret inte motsvarar någon veckodag skall funktionen returnera false.

const weekday = (dayOfWeek) => {
    switch (dayOfWeek) {
        case 1:
            return "måndag";
        case 2:
            return "tisdag";
        case 3:
            return "onsdag";
        case 4:
            return "torsdag";
        case 5:
            return "fredag";
        case 6:
            return "lördag";
        case 7:
            return "söndag";
        default:
            return false;
    }
}

const weekday2 = (dayOfWeek) => {
    const weekdays = [
        "måndag",
        "tisdag",
        "onsdag",
        "torsdag",
        "fredag",
        "lördag",
        "söndag"
    ]
    return weekdays[dayOfWeek - 1] || false;
}
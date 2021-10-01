// Input positive integer
const inputPositiveInteger = defaultValue => {
    while (true) {
        let i = Number(window.prompt("Hur många gånger ska vi iterera? Du kan bara välja ett positivt heltal.", defaultValue));

        console.log(Number(i))

        if (typeof i === 'number' && i >= 1 && Number.isInteger(i)) {
            return i;
        }
        window.alert("Du måste mata in ett positivt heltal! Försök igen!");
    }
}

// Output results
const fizzBuzz = iterations => {
    let list = document.querySelector("#result");

    for (let i = 1; i < iterations + 1; i++) {
        let result = '';
        let htmlClass = '';

        if (!(i % 3)) {
            result += "Fizz";
            htmlClass = "fizz";
        }
        if (!(i % 5)) {
            result += "Buzz";
            htmlClass = htmlClass ? "both" : "buzz";
        }
        if (!result) {
            result = i;
            htmlClass = "variable";
        }

        let item = document.createElement('p');
        item.className = htmlClass;
        item.innerText = result;
        list.appendChild(item);
    }
}

// Do it! :D
fizzBuzz(inputPositiveInteger(100));


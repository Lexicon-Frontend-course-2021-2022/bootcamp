// Input positive integer
const inputPositiveInteger = defaultValue => {
    while (true) {

        /* Get number */
        let i = window.prompt("Hur många gånger ska vi iterera? Du kan bara välja ett positivt heltal.", defaultValue);

        /* Explicit type conversion */
        i = Number(i);

        /* Basic sanity check */
        if (typeof i === 'number' && i > 0 && Number.isInteger(i)) {
            return i;
        }

        /* Stupid user needs a slap! */
        window.alert("Du måste mata in ett positivt heltal, pucko! Släpp sargen och försök igen!");

    }

}


// Output results as html
const fizzBuzz = iterations => {

    /* Get element to put our new children in */
    let parent = document.querySelector("#result");

    for (let i = 1; i < iterations + 1; i++) {
        let result = '';
        let htmlClass = '';

        /* Simple fizzbuzz algo */
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

        /* Output result as a new child */
        let child = document.createElement('p');
        child.className = htmlClass;
        child.innerText = result;
        parent.appendChild(child);

    }

}

// Do it! :D
fizzBuzz(inputPositiveInteger(100));


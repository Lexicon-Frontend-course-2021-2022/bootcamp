
/* ---- Don't change anything between here --- */

const shoppingList = ["Tomatoes", "Eggs", "Potatoes", "Ham", "Milk"];

/* --- And here --- */

// Loop through the array to print each item on new line

shoppingList.forEach(item => {
    console.log(item);
})
// if the number of items is more than 3 alert('Man, how can I carry so much?');

if (shoppingList.length > 3) {
    window.alert('Man, how can I carry so much?');
}

// Remove the last item, Milk, and console.log it to the console

console.log(shoppingList.pop());

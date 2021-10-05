// Make an array of buttons
const buttons = ['#button-rock', '#button-scissor', '#button-paper']
  .map(selector => document.querySelector(selector));

// Add event listener to buttons.
buttons.forEach(button => {
  button.addEventListener('click', event => {
    getWinner(event.target.innerText);
  });
});

// Play!
const getWinner = userWeapon => {
  const winner = document.querySelector('#winner');
  const result = document.querySelector('#result');

  // Let computer play. Use names from buttons.
  const computerWeapon = buttons[Math.floor(Math.random() * 3)].innerText;

  // Use aliasing on long variable names to improve readability later...
  // Destructuring 
  const [u, c] = [userWeapon, computerWeapon];

  // Calculate and output result
  // c = computerWeapon
  // u = userWeapon
  if (c === u) {

    // Draw
    winner.innerText = "It's a draw!";
    result.innerText = `You both selected ${userWeapon}`;

  } else if ( // Paper > Rock > Scissor > Paper > [...]
    (c === 'Paper' && u === 'Rock') ||
    (c === 'Rock' && u === 'Scissor') ||
    (c === 'Scissor' && u === 'Paper')) {

    // Computer won
    winner.innerText = "Computer won!";
    result.innerText = `${computerWeapon} beats ${userWeapon}`;

  } else {

    // User won
    winner.innerText = "You won!";
    result.innerText = `${userWeapon} beats ${computerWeapon}`;

  }
};

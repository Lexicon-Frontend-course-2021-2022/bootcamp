let throws = 0;
let currentGoal = 1;

const dice = {
  sides: 6,
  throw() {
    return Math.ceil(Math.random() * this.sides);
  }
};

document.querySelector('button').addEventListener('click', () => {

  let result = dice.throw();

  document.querySelector('#dice').classList = [];
  document.querySelector('#dice').classList.add('dice', `dots-${result}`);

  throws++;
  document.querySelector('button').innerText = `Throw dice (${throws})`;

  // Unfade top dices
  if (result === currentGoal) {
    document.querySelector(`.dots-${result}`).classList.remove('faded');
    currentGoal++;
  }

  // All throws done
  if (currentGoal > dice.sides) {

    // Output result and reset for new game
    // This construct is unnessecary, but probably to let us know anout setTimeout()
    setTimeout(() => {
      alert(`You rolled a ladder in ${throws} throws!`);

      // Reset dices & button
      document.querySelectorAll('header .dice').forEach(dice => {
        dice.classList.add('faded');
      });
      document.querySelector('#dice').classList = ['dice'];
      document.querySelector('button').innerText = 'Throw Dice';

      // Reset game data
      throws = 0;
      currentGoal = 1;

    }, 10);

  }


});

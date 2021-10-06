const dice = document.querySelector('#dice');
const button = document.querySelector('button');

button.addEventListener('click', event => {
  const result = Math.floor(Math.random() * 6) + 1;
  console.log(result);
  dice.className = `dice dots-${result}`;
});

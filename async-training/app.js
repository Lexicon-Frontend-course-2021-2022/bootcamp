// Async Bootcamp
// Samling övningar om asynkrona funktioner.
//   Promises
//   .then().catch()
// Log it
// Console.log() Promises olika state < pending > , <rejected> , <resolved> .

//  Polka lover
//  Gör en funktion vid namn letsDance(danceStyle) som bygger på ett Promise . 
//  Funktionen ska ta ett argument danceStyle . Om dansen som erbjuds är polka
//  ska dansen godkännas med frasen Yes, polka is my thing!. Om Dansstilen som 
//  erbjuds är något annat så ska dansförfrågan rejectas med en syrlig diss. 
//  Funktionen ska ta 2s på sig att svara.
//   letsDance('waltz')
// .then(resp => console.log(response)) // ...
// .catch(diss => console.log(diss)) // Not even if a pandemic roamed the earth
//   Använd setTimeout för att fördröja funktionerna.


const letsDance = danceStyle => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      danceStyle == 'polka'
        ? resolve('Yes, polka is my thing!')
        : reject(`Dafuq? ${danceStyle} isn't even a proper dance!`);
    }, 2000);
  });
};

letsDance('waltz')
  .then(response => console.log(response))
  .catch(diss => console.log(diss))

//   Async / Await
//   try / catch
//   Fetch
//   Webbprojektet
//   Du ska göra ett webbprojekt. Gör en promise kedja för detta projekts moment i 
//   följande ordning med följande tider:
//   1. Researcha målgruppen - 4s
//   2. Skissa upp en design på papper - 2s
//   3. Gör skissen till pixel perfect mockup I Figma / XD - 3s
//   4. Koda - 3s
//   5. Stackoverflow:a fel - 1s
//   6. Testa produkten - 2s
//   7. Fira lyckat projekt - 1s
//   Använd setTimeout för att fördröja funktionerna. Testa med fördel både .then() och async/await .

// Generic task returns promise after specified time
const doProjectTask = (name, seconds) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Task '${name}' done in ${seconds} seconds.`);
    }, seconds * 1000);
  });
}

// Do actual project
const webProject = async () => {

  // Define project tasks
  const tasks = [
    { name: 'Research', seconds: 4 },
    { name: 'Sketch up', seconds: 2 },
    { name: 'Mockup', seconds: 3 },
    { name: 'Code', seconds: 3 },
    { name: 'Stackoverflow', seconds: 1 },
    { name: 'Test', seconds: 2 },
    { name: 'Celebrate', seconds: 1 }
  ];

  // Execute project tasks
  for (task of tasks) {
    console.log(
      await doProjectTask(task.name, task.seconds)
    );
  };
};

webProject();



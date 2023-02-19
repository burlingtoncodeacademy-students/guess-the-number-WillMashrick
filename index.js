// Imports readline and allows us to do input in and out
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

//Ask function that takes in text and returns and resolves a promise
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
//run file in terminal with: node fileName.js
// ! DO NOT TOUCH CODE ABOVE THIS LINE

// Async start function being invoked
start();

// The function that starts the whole game
async function start() {
  // Intro game text
  // Game intro message
  console.log("\n-------------------------");
  console.log("Welcome to number picker!");
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  console.log("-------------------------");
  // let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");

  //console.log('You entered: ' + secretNumber);

  // Now try and complete the program.

  //  Example async await function to ask for highest num
  async function startGame() {
    // Set lowest num
    let minNum = 1;

    // Asking the user for highest num
    let pickMaxNum = await ask(`\nPlease choose a number greater than ${minNum}: `);
    
    // Grab the value of user input
    let highNum = parseInt(pickMaxNum);

    // Confirmation message to print
    console.log(`\nYou set ${highNum} as the highest value.`);

      // Ask player to pick their secret number within the range
      let pickYourNumber = await ask(`\nPlease choose a secret number between ${minNum} and ${highNum}: `);

      // Grab the value of user input
      let secretNumber = parseInt(pickYourNumber);

      //confirmation message to print
      console.log(`\nYou set ${secretNumber} as the your secret number.`);

      // function getRandomInt(max) {
      //   return Math.floor(Math.random() * max);
      // }

      let guess = Math.floor((highNum + minNum) / 2);
      // getRandomInt(highNum);
      await ask(`\nIs your number ${guess}? y or n? `);



            while (guess !== secretNumber){

              if (guess < secretNumber) {
                // continue searching to the right
                console.log(`\nReminder: Your secret number is ${secretNumber}.`)
                await ask("\nIs your number (h)igher or (l)ower? ");
                minNum = guess + 1;
                guess = Math.floor((highNum + minNum) / 2);
                await ask(`\nIs your number ${guess}? y or n? `);

            } else if (guess > secretNumber) {
                // search searching to the left
                console.log(`\nReminder: Your secret number is ${secretNumber}.`)
                await ask("\nIs your number (h)igher or (l)ower? ");
                highNum = guess - 1;
                guess = Math.floor((highNum + minNum) / 2);
                await ask(`\nIs your number ${guess}? y or n? `);

              } else if (guess === secretNumber) {
                // found the secret number
                await ask(`\nIs your number ${guess}? y or n? `);
            }
          }
          console.log(`\nI got it! Your secret number is ${guess}!`);
          process.exit();}

          startGame();
  }









// Stops the function from running. "exits"



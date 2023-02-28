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
  console.log("Let's play a game where I (computer)  make up a number and you (human) try to guess it.")
  console.log("-------------------------");
  // let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");

  //console.log('You entered: ' + secretNumber);

  // Now try and complete the program.

  //  Example async await function to ask for highest num
  async function startGame() {
    // Set lowest num
    let minNum = 1;
    let highNum = 100;

    let secretNumber = Math.floor(Math.random() * highNum);

    console.log("\nI have selected a random number to be my secret number.")

    // Asking the user for their first guess
    let guess = await ask(`\nPlease guess a number between ${minNum} and ${highNum}: `);


            while (guess !== secretNumber){

              if (guess < secretNumber) {
                // continue searching to the right
                guess = await ask("\nThat's not my number! Guess a number higher than your previous guess! ");

            } else if (guess > secretNumber) {
                // search searching to the left
                guess = await ask("\nThat's not my number! Guess a number lower than your previous guess! ");

              } else {
                // found the secret number
                console.log(`\nYou got it! My secret number was ${secretNumber}!`);
                process.exit();
            }
          }
          //jumps out of while loop when secret number is equal to guess 


          
          // Stops the function from running. "exits"
        }

          startGame();
  }
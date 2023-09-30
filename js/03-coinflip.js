//The “Coin Flip” Game
//Usage: Use nested conditional statements
//In this part of the assignment you will explore what you’ve learned so far about variables, prompts, 
//conditionals, operators, math, and more to create a “coin flip game”. To complete the game 
//follow the steps outlined below:
//Begin your application by creating a variable called coinFlip and set it equal to a random number. 
//You will have to use a Math method to get this number:
//let randomNum = Math.round(Math.random())
//Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
//Use a conditional to check the result of the coin flip. If it’s less than a certain number, 
//it will be heads. If it’s greater than a certain number, it will be tails.
//If the result is heads and the user selects heads, display the following message within an alert:
//The flip was heads and you chose heads...you win!
//If the result is heads and the user selects tails, display the following message within an alert:
//The flip was heads but you chose tails...you lose!
//If the result is tails and the user selects heads, display the following message within an alert:
//The flip was tails but you chose heads...you lose!
//If the result is tails and the user selects tails, display the following message within an alert:
//The flip was tails and you chose tails...you win!

// Create variables
let coinFlip = Math.round(Math.random())
let choice= prompt("Select Heads or Tails").toLowerCase()
console.log(coinFlip)
console.log(choice)

// Nested Conditional Statements
// Added a validation in case they enter something different to Heads or Tails
if ( choice == "heads" || choice == "tails") {
    if (coinFlip >= 1) { 
        if ( choice == "heads") {document.write(`The flip was heads and you chose heads...you win`)
            } else {document.write(`The flip was heads and you chose tails...you lose`)
        } 
    }else {
        if ( choice == "heads") {document.write(`The flip was tails and you chose heads...you lose`)
            } else {document.write(`The flip was tails and you chose tails...you win`)
            }
        }
    }   
else {document.write("Try again, only enter Heads or Tails, other values will show this error")}


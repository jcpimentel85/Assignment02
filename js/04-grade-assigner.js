//The “Grade Assigner” Application
//Usage: Use else if or switch statements
//Collect the a number between 1 and 100 from the user.
//Make sure that number is between 1 and 100, if it is not, let the user know that 
//only numbers between 1 and 100 are accepted.
//If the score is between 60 and 69, write out “You received a D” into the console.
//If the score is between 70 and 79, write out “You received a C” into the console.
//If the score is between 80 and 89, write out “You received a B” into the console.
//If the score is between 90 and 100, write out “You received an A” into the console.
//If the score is less than 60, write out “You received an F” into the console.

//Create variables and prompt
let varScore = prompt("Enter your score")
let varGrade
//Conditional statement to find the correct Grade
if (varScore < 60){ varGrade = "F"
    } else if( varScore >= 60 &&  varScore <=69) { varGrade = "D"
    } else if( varScore >= 70 &&  varScore <=79) { varGrade = "C"
    } else if( varScore >= 80 &&  varScore <=89) { varGrade = "B"
    } else if ( varScore >= 90 &&  varScore <=100) { varGrade = "A"
    } else console.log("Error in the Matrix, Only numbers between 1 and 100 are accepted")

//display the console message using a switch based on the Grade
switch (varGrade) {
    case "A" : console.log("You received an A") 
    break
    case "B" : console.log("You received an B") 
    break
    case "C" : console.log("You received an C") 
    break
    case "D" : console.log("You received an D") 
    break
    case "F" : console.log("You received an F") 
    break
    default: console.log("Error in the Matrix, Only numbers between 1 and 100 are accepted")
}
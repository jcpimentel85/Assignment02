//Usage: Use simple conditional statements
//Create an application that accepts two integers within two separate prompts. 
//Then, display only the larger of the two within the browser window. Don’t forget 
//to handle the fact that the two could be equal.

//Create Variables and propmt for values
let varNum1= parseInt(prompt('Enter 1st number'))
let varNum2= parseInt(prompt('Enter 2nd number'))

//Conditional Access
if (varNum1 != varNum2) { 
    if (varNum1 > varNum2) {alert(`The larger number is ${varNum1}`)
        } else {alert(`The larger number is ${varNum2}`)
    } 
}else {alert(`Numbers are the same`)
}
//The Word Translator
//Usage: Use simple conditional statements
//Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). 
//If they enter one of the four codes, display the translated version of "Hello World" 
//for the given language within the console window. If the user enters anything but those 
//four language codes, the application should default to English. The result should be (for example):
//Hello World translated in French is: Bonjour le monde

//Variables and Propmt for values
let varLanSel
let varLanMessage
let varLanguage= prompt (`
                 ***Welcome to the World Transalator ***

Please enter one of the following options to select your lenguage
EN = English
ES = Spanish
FR = French
DE = German`)

//Conditional Statements
if (varLanguage === "ES") { varLanSel= "Spanish" , varLanMessage = "Hola Mundo"
    } else if (varLanguage === "FR") {varLanSel= "French" , varLanMessage = "Bonjour le monde"
        } else if (varLanguage === "DE") { varLanSel= "German" , varLanMessage = "Hallo Welt"
} else {varLanSel= "English", varLanMessage = "Hello World"
}

//Display Information on Page
document.write (`<h1>Language selected: ${varLanSel} </h1>`)
document.write (`Hello World translated in ${varLanSel} is: ${varLanMessage}`)
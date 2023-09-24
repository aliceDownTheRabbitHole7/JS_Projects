const prompt = require("prompt-sync")();

const one = "Iron Man";
const two = "Spider-Man";
const three = "Scarlet Witch";
const four = "Black Widow";
const five = "Batman";
const six = "Wonder Woman";
const seven = "Super Man";
const eight = "Green Lantern";

var color;
var number;
var number2;

// Continue to ask user for a color until they choose a color that is listed.

do {
    color = prompt("Pick a color (Red, Blue, Green, Yellow): ").toLowerCase();
    if (color != "blue" && color != "yellow" && color != "red" && color != "green") {
        console.log("That is not a listed color");
    }
} while (color != "blue" && color != "yellow" && color != "red" && color != "green")

// If user chooses red or green, ask for number and loop if user does not choose listed number

if (color == "red" || color == "green") {
    do {
        number = prompt("Now pick a number (1, 2, 5, 6): ");
        if (number != "1" && number != "2" && number != "5" && number != "6") {
            console.log("That is not a listed number.");
        }
    } while (number != "1" && number != "2" && number != "5" && number != "6"); 

    // If user chose 1 or 5, ask for second number and loop if user does not choose listed number

    if (number == "1" || number == "5") {
        do {
            number2 = prompt("Pick another number (3, 4, 7, 8): ");
            if (number2 != "3" && number2 != '4' && number2 != '7' && number2 != '8') {
                console.log("That is not a listed number.")
            }
        } while (number2 != '3' && number2 != '4' && number2 != '7' && number2 != '8')

        // Give fortune depending on user's choice

        if (number2 == "3") {
            console.log("You are " + three + "!")
        } else if (number2 = '4') {
            console.log("You are " + four + "!")
        } else if (number2 = '7') {
            console.log("You are " + seven + "!")
        } else if (number2 = '8') {
            console.log("You are " + eight + "!")
        } else {
            console.log('Went wrong somewhere')
        }
       
    // If user chose 2 or 6, ask for second number and loop if user does not choose listed number

    } else {
        do {
            number2 = prompt("Pick another number (1, 2, 5, 6): ");
            if (number2 != "1" && number2 != "2" && number2 != "5" && number2 != "6") {
                console.log("That is not a listed number.")
            }
        } while (number2 != '1' && number2 != '2' && number2 != '5' && number2 != '6')

        // Give fortune depending on user's choice

        if (number2 == "1") {
            console.log("You are " + one + "!")
        } else if (number2 = '2') {
            console.log("You are " + two + "!")
        } else if (number2 = '5') {
            console.log("You are " + five + "!")
        } else if (number2 = '6') {
            console.log("You are " + six + "!")
        } else {
            console.log('Went wrong somewhere')
        }
    }

// If yellow or blue is chosen, ask for a number continuously until a listed number is chosen

} else {
    do {
        number = prompt("Now pick a number (3, 4, 7, 8): ");
        if (number != "3" && number != "4" && number != "7" && number != "8") {
            console.log("That is not a listed number.")
        }
    } while (number != "3" && number != "4" && number != "7" && number != "8")

    // If user chooses 3 or 7, ask for second number until user chooses a listed number

    if (number == "3" || number == "7") {
        do {
            number2 = prompt("Pick another number (1, 2, 5, 6): ");
            if (number2 != "1" && number2 != '2' && number2 != '5' && number2 != '6') {
                console.log("That is not a listed number.")
            }
        } while (number2 != '1' && number2 != '2' && number2 != '5' && number2 != '6')

        // Give fortune depending on user's choice

        if (number2 == "1") {
            console.log("You are " + one + "!")
        } else if (number2 = '2') {
            console.log("You are " + two + "!")
        } else if (number2 = '5') {
            console.log("You are " + five + "!")
        } else if (number2 = '6') {
            console.log("You are " + six + "!")
        } else {
            console.log('Went wrong somewhere')
        }
    }

    // If user chooses 4 or 8

    if (number == "4" || number == "8") {
        do {
            number2 = prompt("Pick another number (3, 4, 7, 8): ");
            if (number2 != "3" && number2 != '4' && number2 != '7' && number2 != '8') {
                console.log("That is not a listed number.")
            }
        } while (number2 != '3' && number2 != '4' && number2 != '7' && number2 != '8')

        // Give fortune depending on user's choice

        if (number2 == "3") {
            console.log("You are " + three + "!")
        } else if (number2 = '4') {
            console.log("You are " + four + "!")
        } else if (number2 = '7') {
            console.log("You are " + seven + "!")
        } else if (number2 = '8') {
            console.log("You are " + eight + "!")
        } else {
            console.log('Went wrong somewhere')
        }
    }
}

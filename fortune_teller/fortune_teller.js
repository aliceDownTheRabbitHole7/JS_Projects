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

// Continues to ask user for a color until they choose a color that is listed.

do {
    color = prompt("Pick a color (Red, Blue, Green, Yellow): ").toLowerCase();
    if (color != "blue" && color != "yellow" && color != "red" && color != "green") {
        console.log("That is not a listed color");
    }
} while (color != "blue" && color != "yellow" && color != "red" && color != "green")

// Ask for a number if red or green chosen

if (color == "red" || color == "green") {
    var number;

    // Continue to ask for number until a listed number is chosen.

    do {
        number = prompt("Now pick a number (1, 2, 5, 6): ").toLowerCase();
        if (number != "1" && number != "2" && number != "5" && number != "6") {
            console.log("That is not a listed number.")
        }
    } while (number != "1" && number != "2" && number != "5" && number != "6")  

    // Tells user's fortune depending on the number they chose

    if (number == "1") {
        console.log("You are " + one + "!");
    } else if (number == "") {
        console.log("You are " + two + "!");
    } else if (number == "") {
        console.log("You are " + five + "!");
    } else {
        console.log("You are " + six + "!");
    }

// Ask for a number if yellow or blue is chosen and continue to ask until a listed number is chosen

} else {
    do {
        number = prompt("Now pick a number (3, 4, 7, 8): ").toLowerCase();
        if (number != "3" && number != "4" && number != "7" && number != "8") {
            console.log("That is not a listed number.")
        }
    } while (number != "3" && number != "4" && number != "7" && number != "8")

    // Give fortune depending on what number is chosen+
    

}

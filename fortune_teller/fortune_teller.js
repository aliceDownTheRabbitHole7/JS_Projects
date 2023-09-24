const prompt = require("prompt-sync")();

// Super hero bank

const superHeroes = [
    {
        "name": "Iron Man",
        "alias": "Tony Stark",
        "origin": "Created a mechanized armor to escape capture from terrorist group."
    },
    {
        "name": "Spider-Man",
        "alias": "Peter Parker",
        "origin": "Bit by a radioactive spider."
    },
    {
        "name": "Scarlet Witch",
        "alias": "Wanda Maximoff",
        "origin": "Born a mutant, daughter of Magneto."
    },
    {
        "name": "Black Widow",
        "alias": "Natasha Romanoff",
        "origin": "Trained elite assassin."
    },
    {
        "name": "Batman",
        "alias": "Bruce Wayne",
        "origin": "Becomes hero after tragic murder of parents at a young age."
    },
    {
        "name": "Wonder Woman",
        "alias": "Diana Prince",
        "origin": "Amazoness warrior with powers given by the Greek gods"
    },
    {
        "name": "Super Man",
        "alias": "Clark Kent",
        "origin": "Alien with god-like strength, speed, and flight."
    },
    {
        "name": "Green Lantern",
        "alias": "Hal Jordan",
        "origin": "Former military pilot, turned hero after cosmic ring was bestowed upon him."
    }
];

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
            console.log("You are " + superHeroes[2].name + "!");
            console.log("Alias: " + superHeroes[2].alias);
            console.log("Origin: " + superHeroes[2].origin);
        } else if (number2 == '4') {
            console.log("You are " + superHeroes[3].name + "!");
            console.log("Alias: " + superHeroes[3].alias);
            console.log("Origin: " + superHeroes[3].origin);
        } else if (number2 == '7') {
            console.log("You are " + superHeroes[6].name + "!");
            console.log("Alias: " + superHeroes[6].alias);
            console.log("Origin: " + superHeroes[6].origin);
        } else {
            console.log("You are " + superHeroes[7].name + "!");
            console.log("Alias: " + superHeroes[7].alias);
            console.log("Origin: " + superHeroes[7].origin);
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
            console.log("You are " + superHeroes[0].name + "!");
            console.log("Alias: " + superHeroes[0].alias);
            console.log("Origin: " + superHeroes[0].origin);
        } else if (number2 == '2') {
            console.log("You are " + superHeroes[1].name + "!");
            console.log("Alias: " + superHeroes[1].alias);
            console.log("Origin: " + superHeroes[1].origin);
        } else if (number2 == '5') {
            console.log("You are " + superHeroes[4].name + "!");
            console.log("Alias: " + superHeroes[4].alias);
            console.log("Origin: " + superHeroes[4].origin);
        } else {
            console.log("You are " + superHeroes[5].name + "!");
            console.log("Alias: " + superHeroes[5].alias);
            console.log("Origin: " + superHeroes[5].origin);
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
            console.log("You are " + superHeroes[0].name + "!");
            console.log("Alias: " + superHeroes[0].alias);
            console.log("Origin: " + superHeroes[0].origin);
        } else if (number2 == '2') {
            console.log("You are " + superHeroes[1].name + "!");
            console.log("Alias: " + superHeroes[1].alias);
            console.log("Origin: " + superHeroes[1].origin);
        } else if (number2 == '5') {
            console.log("You are " + superHeroes[4].name + "!");
            console.log("Alias: " + superHeroes[4].alias);
            console.log("Origin: " + superHeroes[4].origin);
        } else {
            console.log("You are " + superHeroes[5].name + "!");
            console.log("Alias: " + superHeroes[5].alias);
            console.log("Origin: " + superHeroes[5].origin);
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
            console.log("You are " + superHeroes[2].name + "!");
            console.log("Alias: " + superHeroes[2].alias);
            console.log("Origin: " + superHeroes[2].origin);
        } else if (number2 == '4') {
            console.log("You are " + superHeroes[3].name + "!");
            console.log("Alias: " + superHeroes[3].alias);
            console.log("Origin: " + superHeroes[3].origin);
        } else if (number2 == '7') {
            console.log("You are " + superHeroes[6].name + "!");
            console.log("Alias: " + superHeroes[6].alias);
            console.log("Origin: " + superHeroes[6].origin);
        } else {
            console.log("You are " + superHeroes[7].name + "!");
            console.log("Alias: " + superHeroes[7].alias);
            console.log("Origin: " + superHeroes[7].origin);
        }
    }
}

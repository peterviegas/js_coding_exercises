// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
    if (word === undefined) throw new Error("word is required");
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export function generateInitials(firstName, lastName) {
    if (firstName === undefined) throw new Error("firstName is required");
    if (lastName === undefined) throw new Error("lastName is required");
    return firstName[0] + "." + lastName[0]
}

export function addVAT(originalPrice, vatRate) {
    if (originalPrice === undefined) throw new Error("originalPrice is requied");
    if (vatRate === undefined) throw new Error("vatRate is required");
    return parseFloat((originalPrice + (originalPrice * vatRate) / 100).toFixed(2))
}

export function getSalePrice(originalPrice, reduction) {
    if (originalPrice === undefined) throw new Error("originalPrice is required");
    if (reduction === undefined) throw new Error("reduction is required");
    return parseFloat((originalPrice - (originalPrice * reduction) / 100).toFixed(2))
}

export function getMiddleCharacter(str) {
    if (str === undefined) throw new Error("str is required");
    return ((str.length % 2) === 0) ? str[(str.length / 2) - 1] + str[(str.length / 2)] : str[Math.floor(str.length / 2)];
}

export function reverseWord(word) {
    if (word === undefined) throw new Error("word is required");
    //return (word.split(" ").reverse().map(wordInvert => wordInvert.split("").reverse().join(""))).join(" ");
    return word.split(" ").reverse().reverse().join("").join(" ");

}

export function reverseAllWords(words) {
    if (words === undefined) throw new Error("words is required");
    //return words.map(wordInvert => wordInvert.split("").reverse().join(""));
    return words.split("").reverse().join("");
}

export function countLinuxUsers(users) {
    if (users === undefined) throw new Error("users is required");

    let count = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].type === 'Linux') {
            count += 1;
        }
    }
    return count;
}

export function getMeanScore(scores) {
    if (scores === undefined) throw new Error("scores is required");
    let count = 0;
    let scoreMed = 0;
    for (let i = 0; i < scores.length; i++) {
        count += 1;
        scoreMed += scores[i];
    }
    return parseFloat((scoreMed / count).toFixed(2));
}

export function simpleFizzBuzz(n) {
    if (n === undefined) throw new Error("n is required");

    if (n % 3 === 0 && n % 5 === 0) {
        return 'fizzbuzz';
    } else if (n % 3 === 0) {
        return 'fizz';
    } else if (n % 5 === 0) {
        return 'buzz';
    } else {
        return n;
    }
}
export function getSquares(nums) {
    if (nums === undefined) throw new Error("nums is required");
    const numsDouble = [];

    for (var i = 0; i < nums.length; i++) {
        numsDouble.push(nums[i] * nums[i]);
    }

    return numsDouble
}

export function camelCaseWords(words) {
    if (words === undefined) throw new Error("words is required");

    let wordCamelCase = "";

    for (var i = 0; i < words.length; i++) {
        if (i == 0) {
            wordCamelCase += words[i];
        } else {
            var aux = words[i];
            wordCamelCase += aux[0].toUpperCase() + aux.slice(1).toLowerCase();
        }
    }
    return wordCamelCase
}

export function getTotalSubjects(people) {
    if (people === undefined) throw new Error("people is required");

    let subjects = 0;
    for (var i = 0; i < people.length; i++) {
        if (people[i].subjects.length > 0) {
            subjects = subjects + people[i].subjects.length;
        }
    }
    return subjects;
}

export function checkIngredients(menu, ingredient) {
    if (menu === undefined) throw new Error("menu is required");
    if (!ingredient) throw new Error("ingredient is required");

    let ingredientFound = false
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].ingredients.includes(ingredient) === true) {
            ingredientFound = true;
            break;
        }
    }
    return ingredientFound
}

export function duplicateNumbers(arr1, arr2) {
    if (arr1 === undefined) throw new Error("arr1 is required");
    if (arr2 === undefined) throw new Error("arr2 is required");
    // Your code here!
}
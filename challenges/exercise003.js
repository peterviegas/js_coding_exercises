export function getSquares(nums) {
    if (nums === undefined) throw new Error("nums is required");
    return nums.map(function(num) { return num * num; });
}

export function camelCaseWords(words) {
    if (words === undefined) throw new Error("words is required");

    let wordCamelCase = "";

    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            wordCamelCase += words[i];
        } else {
            let reversedWord = words[i];
            wordCamelCase += reversedWord[0].toUpperCase() + reversedWord.slice(1).toLowerCase();
        }
    }
    return wordCamelCase
}

export function getTotalSubjects(people) {
    if (people === undefined) throw new Error("people is required");

    let subjects = 0;
    for (let i = 0; i < people.length; i++) {
        if (people[i].subjects.length > 0) {
            subjects = subjects + people[i].subjects.length;
        }
    }
    return subjects;
}

export function checkIngredients(menu, ingredient) {
    if (menu === undefined) throw new Error("menu is required");
    if (!ingredient) throw new Error("ingredient is required");

    return (menu.filter((item) => item.ingredients.includes(ingredient))).length > 0;
}

export function duplicateNumbers(arr1, arr2) {
    if (arr1 === undefined) throw new Error("arr1 is required");
    if (arr2 === undefined) throw new Error("arr2 is required");
    return (arr1.filter(dupl => arr2.includes(dupl))).sort().filter((item, index) => (arr1.filter(dupl => arr2.includes(dupl))).sort().indexOf(item) === index);
}
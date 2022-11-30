export function getFillings(sandwich) {
    if (sandwich === undefined) throw new Error("ingredients is required");

    return sandwich.fillings
}

export function isFromManchester(person) {
    if (person === undefined) throw new Error("person is required");

    return (person.city === 'Manchester' ? true : false);
}

export function getBusNumbers(people) {
    if (people === undefined) throw new Error("people is required");
    const num = Math.trunc(people / 40)
    return people % 40 > 0 ? num + 1 : num;
}

export function countSheep(arr) {
    if (arr === undefined) throw new Error("arr is required");
    let count = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'sheep') {
            count += 1;
        }
    }
    return count
}

export function hasMPostCode(person) {
    if (person === undefined) throw new Error("person is required");
    // Your code here!
}
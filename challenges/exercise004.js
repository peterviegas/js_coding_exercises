export function findSmallNums(nums) {
    if (!nums) throw new Error("nums is required");
    return nums.filter((num) => num < 1);
}

export function findNamesBeginningWith(names, char) {
    if (!names) throw new Error("names is required");
    if (!char) throw new Error("char is required");
    return names.filter((item) => item[0] === char);
}

export function findVerbs(words) {
    if (!words) throw new Error("words is required");
    return words.filter((item) => item.split(" ")[0] === 'to');
}

export function getIntegers(nums) {
    if (!nums) throw new Error("nums is required");
    return nums.filter((item) => Number.isSafeInteger(item));
}

export function getCities(users) {
    if (!users) throw new Error("users is required");
    return users.map((item) => item.data.city.displayName);
}

export function getSquareRoots(nums) {
    if (!nums) throw new Error("nums is required");
    return nums.map((item) => parseFloat((Math.sqrt(item)).toFixed(2)));
}

export function findSentencesContaining(sentences, str) {
    if (!sentences) throw new Error("sentences is required");
    if (!str) throw new Error("str is required");

    const findSentenceContaining = [];
    sentences.forEach((item) => {
        const indiceStr = item.search(str);
        const indiceStrSensitive = item.search(str[0].toUpperCase() + str.slice(1).toLowerCase());
        if (indiceStr != -1 || indiceStrSensitive != -1) {
            findSentenceContaining.push(item)
        }
    });
    return findSentenceContaining;
}

export function getLongestSides(triangles) {
    if (!triangles) throw new Error("triangles is required");
    return triangles.map((item) => Math.max(...(item)));
}
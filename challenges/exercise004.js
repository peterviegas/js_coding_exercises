export function findSmallNums(nums) {
    if (!nums) throw new Error("nums is required");

    const smallNum = [];
    nums.forEach(function(item) {
        if (item < 1) {
            smallNum.push(item)
        }
    });
    return smallNum;
}

export function findNamesBeginningWith(names, char) {
    if (!names) throw new Error("names is required");
    if (!char) throw new Error("char is required");

    const namesBeginWith = [];
    names.forEach(function(item) {
        if (item[0] === char) {
            namesBeginWith.push(item)
        }
    });
    return namesBeginWith;
}

export function findVerbs(words) {
    if (!words) throw new Error("words is required");

    const findVerb = [];
    words.forEach(function(item) {
        const infinitive = item.split(" ");
        if (infinitive[0] === 'to') {
            findVerb.push(item)
        }
    });
    return findVerb;
}

export function getIntegers(nums) {
    if (!nums) throw new Error("nums is required");

    const getInteger = [];
    nums.forEach(function(item) {
        if (Number.isSafeInteger(item)) {
            getInteger.push(item)
        }
    });
    return getInteger;
}

export function getCities(users) {
    if (!users) throw new Error("users is required");
    return users.map(function(item) {
        return item.data.city.displayName;
    });
}

export function getSquareRoots(nums) {
    if (!nums) throw new Error("nums is required");
    return nums.map(function(item) {
        return parseFloat((Math.sqrt(item)).toFixed(2));
    });
}

export function findSentencesContaining(sentences, str) {
    if (!sentences) throw new Error("sentences is required");
    if (!str) throw new Error("str is required");

    const findSentenceContaining = [];
    sentences.forEach(function(item) {
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
    return triangles.map(function(item) {
        return Math.max(...(item));
    });
}
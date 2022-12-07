export const findNextNumber = (nums, n) => {
    if (nums === undefined) throw new Error("nums is required");
    if (n === undefined) throw new Error("n is required");

    let pos = null;
    if ((nums.findIndex((element) => element === n) !== -1) && ((nums.findIndex((element) => element === n) + 1) < nums.length)) {
        pos = (nums.findIndex((element) => element === n) + 1);
    }
    return (pos === null) ? null : nums[pos];
};

export const count1sand0s = (str) => {
    if (str === undefined) throw new Error("str is required");

    const frequencies = { 1: 0, 0: 0 };

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        (frequencies[char] === undefined) ? frequencies[char] = 1: frequencies[char] += 1;
    }
    return (frequencies);
};

export const reverseNumber = (n) => {
    if (n === undefined) throw new Error("n is required");
    return parseInt(n.toString().split('').reverse().join(''));
};

export const sumArrays = (arrs) => {
    if (arrs === undefined) throw new Error("arrs is required");
    let sumArray = 0;
    for (let i = 0; i < arrs.length; i++) {
        for (let j = 0; j < arrs[i].length; j++) {
            sumArray += arrs[i][j];
        }
    }
    return sumArray;
};

export const arrShift = (arr) => {
    if (arr === undefined) throw new Error("arr is required");

    if ((arr.length === 0) || (arr.length === 1)) {
        return arr;
    } else {
        const firstElement = arr.shift();
        const lastElement = arr.pop();
        arr.unshift(lastElement);
        arr.push(firstElement);
    }
    return arr;
};

export const findNeedle = (haystack, searchTerm) => {
    if (haystack === undefined) throw new Error("haystack is required");
    if (searchTerm === undefined) throw new Error("searchTerm is required");

    let verif = false;
    for (let key in haystack) {
        const indiceStr = (haystack[key].toString().toLowerCase()).search(searchTerm.toString().toLowerCase());
        if (indiceStr != -1) {
            verif = true;
            break;
        }
    }
    return verif;
};

export const getWordFrequencies = (str) => {
    if (str === undefined) throw new Error("str is required");

    const amountWord = {};
    str.split(" ").map((item) => {
        const currentWord = amountWord[item.toLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '')];
        const count = currentWord ? currentWord : 0;
        amountWord[item.toLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '')] = count + 1;
    });
    return amountWord;
};
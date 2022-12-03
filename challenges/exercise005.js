export const findNextNumber = (nums, n) => {
    if (nums === undefined) throw new Error("nums is required");
    if (n === undefined) throw new Error("n is required");

    let pos = null;

    if ((nums.findIndex((element) => element === n) !== -1) && ((nums.findIndex((element) => element === n) + 1) < nums.length)) {
        pos = (nums.findIndex((element) => element === n) + 1);
    }

    if (pos === null) {
        return null;
    } else {
        return nums[pos];
    }

};

export const count1sand0s = (str) => {
    if (str === undefined) throw new Error("str is required");

    const frequencies = { 1: 0, 0: 0 };

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (frequencies[char] === undefined) {
            frequencies[char] = 1;
        } else {
            frequencies[char] += 1;
        }
    }
    return (frequencies);
};

export const reverseNumber = (n) => {
    if (n === undefined) throw new Error("n is required");
    return parseInt(n.toString().split('').reverse().join(''));
};

export const sumArrays = (arrs) => {
    if (arrs === undefined) throw new Error("arrs is required");
    // Your code here!
};

export const arrShift = (arr) => {
    if (arr === undefined) throw new Error("arr is required");
    // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
    if (haystack === undefined) throw new Error("haystack is required");
    if (searchTerm === undefined) throw new Error("searchTerm is required");
    // Your code here!
};

export const getWordFrequencies = (str) => {
    if (str === undefined) throw new Error("str is required");
    // Your code here!
};
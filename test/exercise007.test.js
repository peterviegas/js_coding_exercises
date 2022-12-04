import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner,
} from "../challenges/exercise007";

describe("sumDigits", () => {
    /*test("it throws an error if not passed an array", () => {
        expect(() => {
            sumDigits();
        }).toThrow("arr is required");

        expect(() => {
            sumDigits("foo");
        }).toThrow("an Array is required");

        expect(() => {
            sumDigits(4);
        }).toThrow("an Array is required");
    });*/

    test("This function takes a number and returns the sum of all its digits", () => {
        expect(sumDigits([1, 2, 3])).toBe(6);
        expect(sumDigits([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
        expect(sumDigits([100, 20000, 300000])).toBe(320100);
    });
    test("This function takes a negative number and returns the sum of all its digits", () => {
        expect(sumDigits([-1, -2, -3])).toBe(-6);
    });
    test("This function takes a zero number and returns the sum of all its digits", () => {
        expect(sumDigits([0, 0, 0])).toBe(0);
    });
    test("This function takes decimal number and returns the sum of all its digits", () => {
        expect(sumDigits([0.6, 0.4, 0.3])).toBe(1.3);
    });
});

describe("createRange", () => {
    test("It received a start, an end and a step. Step is the gap between numbers in the range. ", () => {
        expect(createRange(3, 11, 2)).toStrictEqual([3, 5, 7, 9, 11]);
        expect(createRange(0, 50, 5)).toStrictEqual([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
        expect(createRange(10, 100, 10)).toStrictEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
    });
    test("It received a start, an end and a step negative numbers. Step is the gap between numbers in the range. ", () => {
        expect(createRange(-10, 0, 3)).toStrictEqual([-10, -7, -4, -1]);
    });
    test("It received a start, an end and a step. Step not informed is the gap between numbers in the range. ", () => {
        expect(createRange(1, 10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    test("It received a start 0, an end 0 and a step 0. Step is the gap between numbers in the range. ", () => {
        expect(createRange(0, 0, 0)).toStrictEqual([0]);
    });
});
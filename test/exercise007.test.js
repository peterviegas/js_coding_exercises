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

});
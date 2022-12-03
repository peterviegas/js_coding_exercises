import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
    test("it throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("foo");
        }).toThrow("an Array is required");

        expect(() => {
            sumMultiples(4);
        }).toThrow("an Array is required");
    });

    test("it return the sum of any numbers that are multiple of 3 or 5", () => {
        expect(sumMultiples([1, 3, 5])).toBe(8);
    });
    test("it return the sum of any numbers that are multiple of 3 or 5", () => {
        expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    });
    test("it works okay with decimal numbers", () => {
        expect(sumMultiples([1, 3, 5.0, 12, 7, 8, 1, 10])).toBe(30);
    });
    test("it return 0 if there are no multiple  of 3 or 5", () => {
        expect(sumMultiples([1, 2, 7, 8, 1, 13])).toBe(0);
    });

    test("it return [] if there are no numbers", () => {
        expect(sumMultiples([])).toBe(0);
    });

});

describe("createMatrix", () => {
    it("returns a Matrix of 1 x 1 when passes 1", () => {
        const result = createMatrix(1, "foo");
        const expect = [
            ["foo"]
        ]; //<= complex value
        expect(result).toEqual(expect);
    });
});

describe("areWeCovered", () => {
    test("it return false if there are no staff at all", () => {
        expect(areWeCovered([], "Sunday")).toBe(false);
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
    });

    test("retunrs false if there are staff but < 3 not scheduled to work", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Tuesday"] },
            { name: "paul", rota: ["Monday", "Tuesday"] },
            { name: "sally", rota: ["Monday", "Tuesday"] },
            { name: "jess", rota: ["Monday", "Tuesday"] },
        ];
        expect(areWeCovered(staff, "Wednesday")).toBe(false);
    });
});
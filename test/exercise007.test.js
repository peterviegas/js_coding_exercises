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

describe("getScreentimeAlertList", () => {
    test(" return an array of usernames of users who have used more than 100 minutes of screentime for a given date.", () => {
        const users = [{
                name: "Beth Smith",
                username: "beth_1234",
                birthDate: "1977-06-25",
                role: "Project Manager",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                name: "Sam Jones",
                username: "sam_j_1989",
                birthDate: "1991-11-11",
                role: "Software Engineer",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 28, facebook: 40 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
            {
                name: "Anna Dolores",
                username: "anna_1992",
                birthDate: "1992-11-29",
                role: "Software Engineer",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 45 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ];

        let result = ["beth_1234"];
        expect(getScreentimeAlertList(users, "2019-05-04")).toStrictEqual(result);

        result = ["sam_j_1989", "anna_1992"];
        expect(getScreentimeAlertList(users, "2019-05-01")).toStrictEqual(result);

        result = [];
        expect(getScreentimeAlertList(users, "2019-05-03")).toStrictEqual(result);

    });
});

describe("hexToRGB", () => {
    test("This function should transform the hex code into an RGB", () => {
        expect(hexToRGB("#FF1133")).toStrictEqual("rgb(255,17,51)");
    });
    test("This function should transform the hex code into an RGB (White)", () => {
        expect(hexToRGB("#FFFFFF")).toStrictEqual("rgb(255,255,255)");
    });
    test("This function should transform the hex code into an RGB (Black)", () => {
        expect(hexToRGB("#000000")).toStrictEqual("rgb(0,0,0)");
    });
    test("This function should transform the hex code into an RGB (Gray)", () => {
        expect(hexToRGB("#BEBEBE")).toStrictEqual("rgb(190,190,190)");
    });
    test("This function should transform the hex code into an RGB (Invalido - number of characters)", () => {
        expect(hexToRGB("#BEBEBEBE")).toStrictEqual("");
    });
});

describe("findWinner", () => {
    test("The function should return X if player X has won, 0 if player 0 has won, and null if there is currently no winner (X)", () => {
        const board = [
            ['X', '0', null],
            ['X', null, '0'],
            ['X', null, '0']
        ]
        expect(findWinner(board)).toStrictEqual("X");
    });

    test("The function should return X if player X has won, 0 if player 0 has won, and null if there is currently no winner (0)", () => {
        const board = [
            ['X', '0', '0'],
            [null, null, '0'],
            ['X', null, '0']
        ]
        expect(findWinner(board)).toStrictEqual("0");
    });

    test("The function should return X if player X has won, 0 if player 0 has won, and null if there is currently no winner (null)", () => {
        const board = [
            ['X', '0', null],
            [null, null, '0'],
            ['X', null, '0']
        ]
        expect(findWinner(board)).toStrictEqual(null);
    });
});
/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
export const sumDigits = (n) => {
    if (n === undefined) throw new Error("n is required");

    return n.reduce((accumulator, currentValue) => accumulator + currentValue);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
export const createRange = (start, end, step) => {
    if (start === undefined) throw new Error("start is required");
    if (end === undefined) throw new Error("end is required");

    if (step === undefined || step === 0) {
        step = 1;
    }
    const rangeCreate = [];
    for (let i = start; i <= end; i += step) {
        rangeCreate.push(i);
    }
    return rangeCreate;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
export const getScreentimeAlertList = (users, date, timer) => {
    if (users === undefined) throw new Error("users is required");
    if (date === undefined) throw new Error("date is required");

    if (timer === undefined) {
        timer = 100;
    }

    let getScreenTimeAlert = [];
    for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < users[i].screenTime.length; j++) {
            if (users[i].screenTime[j].date === date) {
                let checkQuantity = 0;
                for (let key in users[i].screenTime[j].usage) {
                    checkQuantity += users[i].screenTime[j].usage[key];
                }
                if (checkQuantity >= timer) {
                    //add output user
                    getScreenTimeAlert.push(users[i].username);
                }
            }
        }
    }
    return getScreenTimeAlert;

    //const dateUser = users.filter((item) => item.screenTime.filter(d => d.date === "2019-05-04"));
    //console.log('primeiro', dateUser);
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
export const hexToRGB = (hexStr) => {
    if (hexStr === undefined) throw new Error("hexStr is required");

    /*let strConv = '';
    const hexStrAux = hexStr.slice(1);
    const hexRgb = hexStrAux.match(/.{1,2}/g);
    const rgbConv = [];

    for (let i = 0; i < hexRgb.length; i++) {
        rgbConv.push(parseInt(hexRgb[i], 16));
    }
    if (hexRgb.length === 3) {
        strConv += 'rgb(' + rgbConv.toString() + ')';
    }
    return strConv;*/
    //return hexStr.slice(1).match(/.{1,2}/g).map((item) => (parseInt(item, 16)));

    const hexToInt = (hex) => {
        return parseInt(hex, 16);
    }

    if (hexStr.length === 7) {
        const red = hexToInt(hexStr.substring(1, 3))
        const green = hexToInt(hexStr.substring(3, 5))
        const blue = hexToInt(hexStr.substring(5, 7))
        return `rgb(${red},${green},${blue})`
    } else {
        return "";
    }


};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
export const findWinner = (board) => {
    if (board === undefined) throw new Error("board is required");

    const xArray = [];
    const yArray = [];
    const arrayWin = [];
    let win = null;

    //array probability line x column
    for (let i = 0; i < board.length; i++) {
        const arrayLine = [];
        const arrayColunn = [];
        for (let j = 0; j < board.length; j++) {
            arrayLine.push(i, j);
            arrayColunn.push(j, i);
        }
        arrayWin.push(arrayLine);
        arrayWin.push(arrayColunn);
        //crusade adjustment
        arrayWin.push([0, 0, 1, 1, 2, 2]);
        arrayWin.push([0, 2, 1, 1, 2, 0]);
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === 'X') {
                xArray.push(i, j);
            }
            if (board[i][j] === '0') {
                yArray.push(i, j);
            }
        }
    }

    //Verify X
    for (let i = 0; i < arrayWin.length; i++) {
        if (xArray.toString().includes(arrayWin[i].toString())) {
            win = 'X';
            break;
        }
    }

    if (win === null) {
        //Verify 0
        for (let i = 0; i < arrayWin.length; i++) {
            if (yArray.toString().includes(arrayWin[i].toString())) {
                win = '0';
                break;
            }
        }
    }
    return win;
};
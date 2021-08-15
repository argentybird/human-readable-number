const dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];
const tw = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

// const th = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
module.exports = function toReadable(number) {
    /* для единиц*/
    if (0 >= number || number < 20) {
        const word = dg[number];
        return word
    }
    /*для десятков+единиц*/
    else if (number < 100) {
        let uno = number % 10;
        const word = dg[uno];


        /**находим десятки */
        let d = (Math.floor(number / 10));
        const word2 = tw[d];
        if (uno == 0) {
            return word2;
        }
        return word2 + " " + word;

    }
    /**для сотен */
    else if (number < 1000) {
        let h = (Math.floor(number / 100));
        let decimal_and_digit = toReadable(number % 100);
        const hundreds = dg[h] + " hundred"

        if (number % 100 == 0) {
            return hundreds;
        }

        return hundreds + " " + decimal_and_digit;
    }


}
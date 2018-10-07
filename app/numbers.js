if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {
    return {
        valueAtBit: function (num, bit) {
            return (num >>> 0).toString(2)[bit]

        },

        base10: function (str) {
            return parseInt(str, 2)
        },

        convertToBinary: function (num) {
            if (num < 0 || num > 255 || num % 1 !== 0) {
                return false
            }
            return ("000000000" + num.toString(2)).substr(-8)
        },

        multiply: function (a, b) {
            var d1 = 0, d2 = 0;
            while (a % 10 !== 0) {
                a = a * 10;
                d1++;
            }
            while (b % 10 !== 0) {
                b = b * 10;
                d2++;
            }
            return a * b / Math.pow(10, d2 + d1);

        }
    };
});


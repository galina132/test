if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {
    return {
        indexOf: function (arr, item) {
            return arr.indexOf(item);
        },

        sum: function (arr) {
            return arr.reduce((a, b) => a + b, 0);

        },

        remove: function (arr, item) {

            return arr.filter((key) => key != item);
        },

        removeWithoutCopy: function (arr, item) {
            var counter = 0;
            arr.forEach(function (el, index) {
                if (item === el) {
                    arr.copyWithin(index, index + 1, arr.length + counter);
                    counter++;
                }
            });
            for (var i = 0; i < counter / 2; i++) {
                arr.pop();
            }
            return arr;
        },

        append: function (arr, item) {
            arr.push(item);
            return arr;
        },

        truncate: function (arr) {
            arr.pop();
            return arr;
        },

        prepend: function (arr, item) {
            arr.unshift(item);
            return arr;
        },

        curtail: function (arr) {
            arr.shift();
            return arr;

        },

        concat: function (arr1, arr2) {
            var arr3 = arr1.concat(arr2)
            return arr3;
        },

        insert: function (arr, item, index) {
            arr.splice(index, 0, item)
            return arr;

        },

        count: function (arr, item) {
            return arr.filter(function (key) {
                return key === item
            }).length;

        },

        duplicates: function (arr) {
            var obj = {};
            var res = [];

            arr.forEach(function (item) {
                if (!obj[item])
                    obj[item] = 0;
                obj[item] += 1;
            })

            for (var prop in obj) {
                if (obj[prop] >= 2) {
                    res.push(prop);
                }
            }

            return res;
        },

        square: function (arr) {
            return arr.map(function (key) {
                return key * key
            });
        },

        findAllOccurrences: function (arr, target) {
            var newarr = arr.map(function (key, index, arr) {
                if (key === target) return index;
                else return -1;
            }).filter(function (el) {
                return el != -1
            });
            return newarr;

        }
    };
});



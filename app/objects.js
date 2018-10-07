if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {
    return {
        alterContext: function (fn, obj) {
            return fn.apply(obj);
        },

        alterObjects: function (constructor, greeting) {
            constructor.prototype.greeting = greeting;

        },

        iterate: function (obj) {
            var arr = [];
            Object.getOwnPropertyNames(obj).forEach(
                function (val, idx, array) {
                    var str = val.concat(':').concat(obj[val])
                    arr.push(str);
                });
            return arr;
        }
    };
});

if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {
    return {
        count: function (start, end) {

            var timer = setInterval(myTimer, 100);

            function myTimer() {

                if (start < end+1) {
                    console.log(start++);
                }

            }

            return {
                cancel: function () {
                    clearInterval(timer);
                }

            }
        }
    };
});
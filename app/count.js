if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {

        var timer = setInterval(myTimer ,600);
        function myTimer() {
            while(start<=end) {
                start++;
                console.log(start);
            }
        }

        this.cancel = function(){clearInterval(timer)};

    }
  };
});
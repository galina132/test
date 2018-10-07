if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return /\d/.test(str);

    },

    containsRepeatingLetter : function(str) {
        return /([a-zA-Z])\1+/.test(str)
    },

    endsWithVowel : function(str) {

        var newstr = str? str.slice(-1) : '';
        var test = (/^[aeiou]$/i).test(newstr);
        return test;

    },

    captureThreeNumbers : function(str) {
        return  str.match(/\d{3}/)? str.match(/\d{3}/)[0] : false;

    },

    matchesPattern : function(str) {
        var test = /^(\d{3})-(\d{3})-(\d{4})$/.test(str)
        return test;

    },
    isUSD : function(str) {
        return /^\$(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?$/.test(str);

    }
  };
});

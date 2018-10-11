if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn(...arr);
    },

    speak : function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function(str) {
        return function(str2) {
            return str + ', ' + str2;
        };

    },

    makeClosures : function(arr, fn) {
        var funcs = [];
        var array = arr;
        var i = 0;
        var l = array.length;

        (function(i, array) {

            for (; i < l; i++) {
                funcs[i] = function(i, array) {
                    return fn(array[i]);
                }.bind(this,i,array);
            }

        }(i, array));

        return funcs;
    },

    partial : function(fn, str1, str2) {
        var d = fn.bind(null, 'Hello', 'Ellie');
        return d(str1,str2);
    },

    useArguments : function() {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i];
            console.log(sum,i,':',arguments[i]);
        }
        return sum;

    },

    callIt : function(fn) {
        return function(...args) {
            return fn.call(this, ...argsBound, ...args);
        }
    },

    partialUsingArguments : function(fn) {
        return function(...args) {
            return func.call(this, ...argsBound, ...args);
        }
    },

    curryIt : function(fn) {

        return function curried(...args) {
            if (args.length >= fn.length) {
                return fn.apply(this, args);
            } else {
                return function (...args2) {
                    return curried.apply(this, args.concat(args2));
                }
            }
        }
    }
  };
});

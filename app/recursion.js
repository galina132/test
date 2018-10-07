if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {
    return {
        listFiles: function (data, dirName) {

            var dir = dirName? (data.dir && data.dir == dirName ? true :false ): true;
            var arr = [];

            if (data.files) {
                checkFiles(data,dir)
            }

            function checkFiles(data,dir) {

                if (data.files) {

                    for(var i = 0;i<data.files.length;i ++) {
                        if(dirName && data.dir == dirName) { dir = true;}
                        if(dir && typeof data.files[i] == 'string') {
                            arr.push(data.files[i]);
                        }
                        if (typeof data.files[i] == 'object' ) {
                            checkFiles(data.files[i],dir);
                        }

                    }

                }
            }
            return arr;
        },

        permute: function (arr) {
            var permutations = [];
            var nextElement = [];
            permutation(arr);

            function permutation(arr){
                if (arr.length === 0) permutations.push(nextElement.join(''));
                for (var i=0; i < arr.length; i++) {
                    arr.push(arr.shift());
                    nextElement.push(arr[0]);
                    permutation(arr.slice(1));
                    nextElement.pop();
                }
            }
            return permutations;
         }
    };
})
;

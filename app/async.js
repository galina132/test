if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
        return new Promise( (resolve, reject) => {
            resolve(value);
        } );
    },

    manipulateRemoteData : function(url) {
      var arr = [];
        return new Promise(function(resolve, reject) {
            fs.readFile('/data/testdata.json', function(err, data){
                if (err)
                    reject(err);
                else {
                    data.people.forEach(function (item) {
                        arr.push(item.name);
                    });

                    resolve(arr);
                }
            });
        });

    }
  };
});

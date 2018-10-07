if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {
    return {
        createModule: function (str1, str2) {
            return {
                name: str2,
                greeting: str1,
                sayIt : function() {
                    return this.greeting + ', ' + this.name;
                }

            }

        }
    };
});

/*
it('you should be able to create a function that returns a module', function() {
    var module = answers.createModule('hello', 'matt');

    expect(module.sayIt).to.be.a('function');
    expect(module.name).to.eql('matt');
    expect(module.greeting).to.eql('hello');
    expect(module.sayIt()).to.eql('hello, matt');

    module.name = 'katniss';
    module.greeting = 'hi';
    expect(module.name).to.eql('katniss');
    expect(module.greeting).to.eql('hi');
    expect(module.sayIt()).to.eql('hi, katniss');
});*/

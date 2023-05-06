const Handlebars = require('Handlebars');


module.exports = {

    ifeq: test => {
        (a, b, options) => {
            if (a == b) {
                return options.fn(this);
            }
            return options.inverse(this);

        };
        return test;
    }
}





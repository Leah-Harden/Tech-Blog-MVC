const bcrypt = require('bcrypt');
const Handlebars = require('Handlebars');


Handlebars.registerHelper('ifeq', function (a, b, options) {
    if (a == b) { 
        return options.fn(this);
    }
    return options.inverse(this);
    
});


// add  bcrypt 
const salt = bcrypt.genSalt()
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});



module.exports = registerHelper;
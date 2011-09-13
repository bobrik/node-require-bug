var UserFactory = require("./UserFactory").UserFactory;

var UserIterator = {

    create: function() {
        var x = UserFactory.createUserById();

        return 1;
    }

};

exports.UserIterator = UserIterator;
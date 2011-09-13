var User = require("./User").User;

var UserFactory = {

    createUserById: function() {
        return new User();
    }

};

exports.UserFactory = UserFactory;
var UserFactory = require("./UserFactory").UserFactory;

var Admin = {

    getAdminUser: function() {
        // BUG: if comment this line out, everything goes ok
        var x = UserFactory.createUserById(1);
        return 1;
    }

};

exports.Admin = Admin;
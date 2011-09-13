var UserIterator = require("./UserIterator").UserIterator
var Admin        = require("./Admin").Admin;

var Script = {

    run: function() {
        console.log(UserIterator.create());

        console.log(Admin.getAdminUser());

    }

}

exports.Script = Script;
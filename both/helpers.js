if (Meteor.isClient) {

    // This code only runs on the client
    Template.registerHelper('Config', function() {
        return Config;
    });

    Template.registerHelper('Accounts', function() {
        return Accounts;
    });
    Template.entryError.helpers({
        error: function() {
            return Session.get('entryError');
        }
    });
    Template.main.company = function () {
        return Company.find();
    };
}


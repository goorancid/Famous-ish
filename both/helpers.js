if (Meteor.isClient) {

    // This code only runs on the client
    Template.registerHelper('Config', function() {
        return Config;
    });
}

if (Meteor.isClient) {
Template.main.company = function () {
    return Company.find();
};
}

// Give authorized users access to sensitive data by group
Meteor.publish('secrets', function (group) {
    if (Roles.userIsInRole(this.userId, ['view-secrets','admin'], group)) {
        return Meteor.secrets.find({group: group});
    } else {
        // user not authorized. do not publish secrets
        this.stop();
    }
});

Accounts.validateNewUser(function (user) {
    var loggedInUser = Meteor.user();
    if (Roles.userIsInRole(loggedInUser, ['admin','manage-users'])) {
        // NOTE: This example assumes the user is not using groups.
        return true;
    }
    throw new Meteor.Error(403, "Not authorized to create new users");
});
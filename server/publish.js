
// Give authorized users access to sensitive data by group
Meteor.publish('secrets', function (group) {
    if (Roles.userIsInRole(this.userId, ['view-secrets','admin'], group)) {
        return Meteor.secrets.find({group: group});
    } else {
        // user not authorized. do not publish secrets
        this.stop();
    }
});
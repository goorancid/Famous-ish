
// Edit the accounts config to allow
//Accounts.ui.config({
//    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
//});

// Additional fields for current user
Meteor.subscribe("userData");

// Subscription loader
Meteor.subscribe('messages');

//
Template.topbar.events({
    "click #logout": function (e, impl) {
        Meteor.logout(function (err) {
            if (err) {
                // show err message
            } else {
                //show alert that says logged out
            }
        });
    }
});

Template.login.events ({
    "submit #login": function(event) {
        var email;
        event.preventDefault();
        email = $('input[name="email"]').val();
        if ((AccountsEntry.isStringEmail(email) && AccountsEntry.settings.emailToLower) || (!AccountsEntry.isStringEmail(email) && AccountsEntry.settings.usernameToLower)) {
            email = email.toLowerCase();
        }
        Session.set('email', email);
        Session.set('password', $('input[name="password"]').val());
        Session.set('talkingToServer', true);
        return Meteor.loginWithPassword(Session.get('email'), Session.get('password'), function(error) {
            Session.set('password', void 0);
            Session.set('talkingToServer', false);
            if (error) {
                // show error message
            } else if (Session.get('fromWhere')) {
                FlowRouter.go(Session.get('fromWhere'));
                return Session.set('fromWhere', void 0);
            } else {
                return FlowRouter.go("dashboardRoute");
            }
        });
    }
});
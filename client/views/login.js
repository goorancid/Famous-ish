Template.entrySignIn.helpers(AccountsEntry.entrySignInHelpers);

Template.entrySignIn.events(AccountsEntry.entrySignInEvents);

AccountsEntry.entrySignInHelpers = {
    emailInputType: function() {
        if (AccountsEntry.settings.passwordSignupFields === 'EMAIL_ONLY') {
            return 'email';
        } else {
            return 'string';
        }
    },
    emailPlaceholder: function() {
        var fields;
        fields = AccountsEntry.settings.passwordSignupFields;
        if (_.contains(['USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL'], fields)) {
            return t9n("usernameOrEmail");
        } else if (fields === "USERNAME_ONLY") {
            return t9n("username");
        }
        return t9n("email");
    },
    logo: function() {
        return AccountsEntry.settings.logo;
    },
    isUsernameOnly: function() {
        return AccountsEntry.settings.passwordSignupFields === 'USERNAME_ONLY';
    }
};

AccountsEntry.entrySignInEvents = {
    'submit #signIn': function(event) {
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
                return T9NHelper.accountsError(error);
            } else if (Session.get('fromWhere')) {
                FlowRouter.go(Session.get('fromWhere'));
                return Session.set('fromWhere', void 0);
            } else {
                return FlowRouter.go(AccountsEntry.settings.dashboardRoute);
            }
        });
    }
};



Template.entryForgotPassword.helpers({
    error: function() {
        return t9n(Session.get('entryError'));
    },
    logo: function() {
        return AccountsEntry.settings.logo;
    }
});

Template.entryForgotPassword.events({
    'submit #forgotPassword': function(event) {
        event.preventDefault();
        Session.set('email', $('input[name="forgottenEmail"]').val());
        if (Session.get('email').length === 0) {
            Session.set('entryError', 'Email is required');
            return;
        }
        Session.set('talkingToServer', true);
        return Accounts.forgotPassword({
            email: Session.get('email')
        }, function(error) {
            Session.set('talkingToServer', false);
            if (error) {
                return Session.set('entryError', error.reason);
            } else {
                return FlowRouter.go(AccountsEntry.settings.homeRoute);
            }
        });
    }
});
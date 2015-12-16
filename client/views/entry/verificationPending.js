Template.entryVerificationPending.helpers({
    error: function() {
        return t9n(Session.get('entryError'));
    },
    logo: function() {
        return AccountsEntry.settings.logo;
    }
});
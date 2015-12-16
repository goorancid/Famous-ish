Template.entryResetPassword.helpers({
    error: function() {
        return Session.get('entryError');
    },
    logo: function() {
        return AccountsEntry.settings.logo;
    }
});

Template.entryResetPassword.events({
    'submit #resetPassword': function(event) {
        var password, passwordErrors;
        event.preventDefault();
        password = $('input[type="password"]').val();
        passwordErrors = (function(password) {
            var errMsg, msg;
            errMsg = [];
            msg = false;
            if (password.length < 7) {
                errMsg.push(t9n("error.minChar"));
            }
            if (password.search(/[a-z]/i) < 0) {
                errMsg.push(t9n("error.pwOneLetter"));
            }
            if (password.search(/[0-9]/) < 0) {
                errMsg.push(t9n("error.pwOneDigit"));
            }
            if (errMsg.length > 0) {
                msg = "";
                errMsg.forEach(function(e) {
                    return msg = msg.concat(e + "\r\n");
                });
                Session.set('entryError', msg);
                return true;
            }
            return false;
        })(password);
        if (passwordErrors) {
            return;
        }
        Session.set('talkingToServer', true);
        return Accounts.resetPassword(Session.get('resetToken'), password, function(error) {
            Session.set('talkingToServer', false);
            if (error) {
                return Session.set('entryError', error.reason || "Unknown error");
            } else {
                Session.set('resetToken', null);
                return FlowRouter.go(AccountsEntry.settings.dashboardRoute);
            }
        });
    }
});
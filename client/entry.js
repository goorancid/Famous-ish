var AccountsEntry, AccountsEntrySignInRequired;

AccountsEntry = {
    settings: {
        wrapLinks: true,
        homeRoute: '/',
        dashboardRoute: '/dashboard',
        passwordSignupFields: 'EMAIL_ONLY',
        emailToLower: true,
        usernameToLower: false,
        entrySignUp: 'signup',
        extraSignUpFields: [],
        showOtherLoginServices: true,
        fluidLayout: false,
        useContainer: true,
        signInAfterRegistration: true,
        emailVerificationPendingRoute: '/verification-pending',
        showSpinner: true,
        spinnerOptions: {
            color: "#000",
            top: "80%"
        }
    },
    isStringEmail: function(email) {
        var emailPattern;
        emailPattern = /^([\w.-]+)@([\w.-]+)\.([a-zA-Z.]{2,6})$/i;
        if (email.match(emailPattern)) {
            return true;
        } else {
            return false;
        }
    },
    config: function(appConfig) {
        var signUpRoute;
        this.settings = _.extend(this.settings, appConfig);
        T9n.defaultLanguage = "en";
        if (appConfig.language) {
            T9n.language = appConfig.language;
        }
        if (appConfig.signUpTemplate) {
            signUpRoute = Router.routes['signup'];
            return signUpRoute.options.template = appConfig.signUpTemplate;
        }
    }
};

this.AccountsEntry = AccountsEntry;

AccountsEntrySignInRequired = function(context, redirect) {
    if (!_.contains(AccountsEntryRouteList, context.route.name) && !Meteor.loggingIn() && !Meteor.user()) {
        Session.set('fromWhere', context.path);
        redirect('/sign-in');
        return Session.set('entryError', t9n('error.signInRequired'));
    }
};

this.T9NHelper = (function() {
    function T9NHelper() {}

    T9NHelper.translate = function(code) {
        return T9n.get(code, "error.accounts");
    };

    T9NHelper.accountsError = function(err) {
        return Session.set('entryError', this.translate(err.reason));
    };

    return T9NHelper;

})();

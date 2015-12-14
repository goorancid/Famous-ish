//////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////
var exposed;

exposed = FlowRouter.group({});

exposed.route('/about', {
    name: 'about',
    action: function() {
        BlazeLayout.render('homeLayout', {main: 'about'});
    }
});
exposed.route('/contact', {
    name: 'contact',
    action: function() {
        BlazeLayout.render('homeLayout', {main: 'contact'});
    }
});
exposed.route('/faq', {
    name: 'faq',
    action: function() {
        BlazeLayout.render('homeLayout', {main: 'faq'});
    }
});
exposed.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render('homeLayout', {main: 'home'});
    }
});
exposed.route('/pricing', {
    name: 'pricing',
    action: function() {
        BlazeLayout.render('homeLayout', {main: 'pricing'});
    }
});
exposed.route('/privacy', {
    name: 'privacy',
    action: function() {
        BlazeLayout.render('homeLayout', {main: 'privacy'});
    }
});
exposed.route('/services', {
    name: 'services',
    action: function() {
        BlazeLayout.render('homeLayout', {main: 'services'});
    }
});
exposed.route('/support', {
    name: 'support',
    action: function() {
        BlazeLayout.render('homeLayout', {main: 'support'});
    }
});
exposed.route('/terms', {
    name: 'terms',
    action: function() {
        BlazeLayout.render('homeLayout', {main: 'terms'});
    }
});

// Account routes
exposed.route('/login', {
    name: 'login',
    action: function(params) {
        var pkgRendered, userRendered;

        if (Meteor.userId()) {
            BlazeLayout.render('adminLayout', {main: 'dashboard'});
        }
        if (AccountsEntry.settings.signInTemplate) {
            this.template = AccountsEntry.settings.signInTemplate;
            pkgRendered = Template.entrySignIn.rendered;
            userRendered = Template[this.template].rendered;
            if (userRendered) {
                Template[this.template].rendered = function() {
                    pkgRendered.call(this);
                    return userRendered.call(this);
                };
            } else {
                Template[this.template].rendered = pkgRendered;
            }
            Template[this.template].events(AccountsEntry.entrySignInEvents);
            Template[this.template].helpers(AccountsEntry.entrySignInHelpers);
        }
        BlazeLayout.render('adminLayout', {main: 'login'});
    },
    triggersEnter: [
        function(context, redirect) {
            Session.set('entryError', undefined);
            Session.set('buttonText', 'in');
        }
    ],
});
exposed.route('/signup', {
    name: 'signup',
    triggersEnter: [
        function(context, redirect) {
            Session.set('entryError', undefined);
            Session.set('buttonText', 'up');
        }
    ],
    action: function(params) {
        var pkgRendered, userRendered;
        if (AccountsEntry.settings.signUpTemplate) {
            this.template = AccountsEntry.settings.signUpTemplate;

            // If the user has a custom template, and not using the helper, then
            // maintain the package Javascript so that OpenGraph tags and share
            // buttons still work.
            pkgRendered = Template.entrySignUp.rendered;
            userRendered = Template[this.template].rendered;

            if (userRendered) {
                Template[this.template].rendered = function() {
                    pkgRendered.call(this);
                    return userRendered.call(this);
                };
            } else {
                Template[this.template].rendered = pkgRendered;
            }

            Template[this.template].events(AccountsEntry.entrySignUpEvents);
            Template[this.template].helpers(AccountsEntry.entrySignUpHelpers);
        }
        BlazeLayout.render('adminLayout', {main: 'signup'});
    }
});

clearEntryError = function(context, redirect) {
    Session.set('entryError', undefined);
};

exposed.route('/forgot', {
    name: 'forgot',
    triggersEnter: [clearEntryError],
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'forgot'});
    }
});

//////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////
var logged;

logged = FlowRouter.group({
    triggersEnter: [
        function() {
            var route;
            if (!(Meteor.loggingIn() || Meteor.userId())) {
                route = FlowRouter.current();
                if (route.route.name !== 'login') {
                    Session.set('redirectAfterLogin', route.path);
                }
                return FlowRouter.go("login");
            }
        }
    ]
});

logged.route('/dashboard', {
    name: 'dashboard',
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'dashboard'});
    }
});
logged.route('/dashboard2', {
    name: 'dashboard2',
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'dashboard2'});
    }
});

logged.route('/dashboard/companies', {
    name: 'companies',
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'companies'});
    }
});
logged.route('/dashboard/searchCompany', {
    name: 'searchCompany',
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'searchCompany'});
    }
});
logged.route('/dashboard/company/:_id', {
    action: function( params ) {
        BlazeLayout.render('adminLayout', {main: 'company'});
    }
});

logged.route('/dashboard/calendar', {
    name: 'calendar',
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'calendar'});
    }
});
logged.route('/dashboard/mailbox', {
    name: 'mailbox',
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'mailbox'});
    }
});


logged.route('/profile', {
    name: 'profile',
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'profile'});
    }
});

//Accounts.onLogin(function() {
//    var redirect;
//    redirect = Session.get("redirectAfterLogin");
//    if (redirect != null) {
//        if (redirect !== 'login') {
//            return FlowRouter.go(redirect);
//        }
//    }
//});



// Logs out account on other clients
Accounts.onLogin(function() {
    Meteor.logoutOtherClients();
    return Session.set('logged', true);
});

//
FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'notfound'});
    }
};
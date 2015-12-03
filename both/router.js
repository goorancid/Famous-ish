//////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////
FlowRouter.route('/about', {
    name: 'about',
    action: function() {
        BlazeLayout.render('homeLayout', {main: 'about'});
    }
});

FlowRouter.route('/contact', {
    name: 'contact',
    action: function() {
        BlazeLayout.render('homeLayout', {main: 'contact'});
    }
});

FlowRouter.route('/faq', {
    name: 'faq',
    action: function() {
        BlazeLayout.render('homeLayout', {main: 'faq'});
    }
});

FlowRouter.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render('homeLayout', {main: 'home'});
    }
});

FlowRouter.route('/pricing', {
    name: 'pricing',
    action: function() {
        BlazeLayout.render('homeLayout', {main: 'pricing'});
    }
});

FlowRouter.route('/privacy', {
    name: 'privacy',
    action: function() {
        BlazeLayout.render('homeLayout', {main: 'privacy'});
    }
});

FlowRouter.route('/services', {
    name: 'services',
    action: function() {
        BlazeLayout.render('homeLayout', {main: 'services'});
    }
});

FlowRouter.route('/support', {
    name: 'support',
    action: function() {
        BlazeLayout.render('homeLayout', {main: 'support'});
    }
});

FlowRouter.route('/terms', {
    name: 'terms',
    action: function() {
        BlazeLayout.render('homeLayout', {main: 'terms'});
    }
});

FlowRouter.route('/companies', {
    name: 'companies',
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'companies'});
    }
});
//////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'dashboard'});
    }
});

FlowRouter.route('/searchCompany', {
    name: 'searchCompany',
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'searchCompany'});
    }
});
FlowRouter.route('/dashboard/calendar', {
    name: 'calendar',
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'calendar'});
    }
});
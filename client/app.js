


// Edit the accounts config to allow
//Accounts.ui.config({
//    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
//});

// Additional fields for current user
Meteor.subscribe("userData");

// Subscription loader
Meteor.subscribe('messages');

//



// api environment variable for mandrillapp.com mail server
Meteor.startup(function () {
    process.env.MAIL_URL = "mandrillapp.com";
});
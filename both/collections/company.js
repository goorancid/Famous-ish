Company = new Mongo.Collection("company");

if (Meteor.isClient) {
    // This code only runs on the client
    Template.body.helpers({
        tasks: function () {
            return Company.find({});
        }
    });
}
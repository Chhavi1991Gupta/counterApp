
counterClicks = new Meteor.Collection("counter");
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return counterClicks.find({}).fetch().length;
    },
    clickDetails: function(){
      return counterClicks.find({});
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
      var text = $('input').val();
      counterClicks.insert({click : 1, username: text , password: text});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

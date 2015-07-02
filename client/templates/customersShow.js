Template.customersShow.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('customer', Router.current().params._id);
    Meteor.subscribe('vehiles', Router.current().params._id);
  }.bind(this));
};

Template.customersShow.helpers({
  customer: function () {
    return Customers.findOne({_id: Router.current().params._id});
  },
  vehiles: function() {
    console.log("Router.current().params._id is    ",Router.current().params._id)
    // console.log(Vehicles.find().fetch() Customers.findOne({_id: Router.current().params._id}))
    return Vehicles.find().fetch();

  }
});

// Template.customersShow.events({
//   'click .clickevent': function () {
//     console.log("this here in clickevent is " , id)
//     Router.go('vehicles.show', {uniqId: id , _id: Router.current().params._id});
//   }
// });

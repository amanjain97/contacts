Meteor.publish('customers', function() {
  return Customers.find();
});

Meteor.publish('customer', function(_id) {
  return Customers.find({_id: _id});
});

Meteor.publish('vehiles', function(_id) {
  return Vehicles.find({customerId: _id});
});

Meteor.publish('vehicleS', function(_id) {

  return Vehicles.find({_id: _id});
});
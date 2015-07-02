Template.vehiclesShow.created = function () {
  this.autorun(function () {
    console.log("ye vehiclesShow ke cretaed par hai ",Router.current().params.uniqId)
    this.subscription = Meteor.subscribe('vehicleS', Router.current().params.uniqId);
  }.bind(this));
};

// Template.vehiclesShow.rendered = function () {
//   this.autorun(function () {
//     if (!this.subscription.ready()) {
//       IonLoading.show();
//     } else {
//       IonLoading.hide();
//     }
//   }.bind(this));
// };

Template.vehiclesShow.helpers({
  vehicleS: function () {
    console.log("ye  vehiclesShow func par hai     ",Router.current().params.uniqId)
    console.log("yfgyg                  ",Vehicles.findOne({_id: Router.current().params.uniqId}))
    return Vehicles.findOne({_id: Router.current().params.uniqId});
  }
});


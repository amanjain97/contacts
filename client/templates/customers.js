Template.customers.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('customers');
  }.bind(this));
};

// Template.customers.rendered = function () {
//   this.autorun(function () {
//     if (!this.subscription.ready()) {
//       IonLoading.show();
//     } else {
//       IonLoading.hide();
//     }
//   }.bind(this));
// };

// Template.customers.rendered = function () {
//   this.autorun(function () {
//     if (!this.subscription.ready()) {
//       IonLoading.show();
//     }
//   }.bind(this));
// };

Template.customers.helpers({
  customers: function () {
    return Customers.find();
  }
});

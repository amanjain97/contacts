Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('customers', {
    path: '/'
  });

  this.route('customers.show', {
    path: '/customers/:_id'
  });

  this.route('vehicles.show', {
    path: '/customers/:_id/vehicles/:uniqId'
  });

  this.route('amanjain', {
    path: '/customers/:customerId/vehicles/:_id'
  });
});

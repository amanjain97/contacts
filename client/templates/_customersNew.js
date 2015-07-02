AutoForm.hooks({
  'customers-new-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
      Router.go('customers.show', {_id: result});
    },

    onError: function(operation, error, template) {
      alert(error);
    }
  }
});

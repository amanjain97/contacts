Template._customersEdit.helpers({
  customer: function () {
    var template = Template.instance();
    return Customers.findOne({_id: template.data.id});
  }
});

AutoForm.hooks({
  'customers-edit-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
    },

    onError: function(operation, error, template) {
      alert(error);
    }
  }
});



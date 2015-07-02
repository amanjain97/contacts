Template._vehiclesEdit.helpers({
  vehicle: function () {
    var template = Template.instance();
    console.log("vehicle edit helper mein " , Router.current().params.uniqId)
    return Vehicles.findOne({_id: Router.current().params.uniqId});
  }
});

AutoForm.hooks({
  'vehicles-edit-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
    },

    onError: function(operation, error, template) {
      alert(error);
    }
  }
});



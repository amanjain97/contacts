AutoForm.hooks({
  'vehicles-new-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
      console.log("path wali id is        ", Router.current().params._id)

      Router.go('vehicles.show', {uniqId: result, _id: Router.current().params._id});
    },
 
    onError: function(operation, error, template) {
      alert(error);
    }

  }
});

AutoForm.hooks({
  'vehicles-new-form': {
  	before: {
      insert: function(doc) {

// console.log(Router.current().params._id)
        // console.log("this in insert hook for ans form" , Meteor.userId());
       // var question = this.questionsSelected.fetch()[0];
        doc = _.extend(doc, {customerId: Router.current().params._id});
        // console.log("doc  ", doc)
        this.result(doc);
      }
    }
  }
});

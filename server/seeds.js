Meteor.startup(function () {

  // if (Customers.find({}).count() === 0) {
  //   _(20).times(function(n) {
  //     var user = Fake.user();

      // Customers.insert({
      //   name: {
      //     first: "aman",
      //     last: "jain"
      //   }
      // });
  //       emails: [{label: 'Work', address: user.email}],
  //       priority: Fake.fromArray(['High', 'Medium', 'Low']),
  //       location: {
  //         city: Fake.word(),
  //         state: Fake.fromArray(STATES)
  //       },
  //       details: {
  //         notes: Fake.paragraph(),
  //         active: Fake.fromArray([true, false])
  //       }
  //     });
  //   });
  // }
console.log(Customers.find().fetch())
   
//       var user = Fake.user();
// console.log(Customers.find())
//       Customers.insert({
//         name: {
//           first: user.name,
//           last: user.surname
//         }
        // emails: [{label: 'Work', address: user.email}],
        // priority: Fake.fromArray(['High', 'Medium', 'Low']),
        // location: {
        //   city: Fake.word(),
        //   state: Fake.fromArray(STATES)
        // },
        // details: {
        //   notes: Fake.paragraph(),
        //   active: Fake.fromArray([true, false])
        // }
      // });
    
  
});


Customers.allow({
  insert: function (userId, post) {
    return true
  },
  update: function(userId, document, fieldNames, modifier) {
    return true
  }
});
Vehicles.allow({
  insert: function (userId, post) {
    return true
  },
  update: function(userId, document, fieldNames, modifier) {
    return true
  }
});
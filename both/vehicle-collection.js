Vehicles = new Mongo.Collection('vehicles');

// Vehicles.before.insert(function (userId, doc) {
//   var gender = Random.choice(['men', 'women']);
//   var num = _.random(0, 50);
//   doc.avatarUrl = 'https://randomuser.me/api/portraits/thumb/' + gender + '/' + num + '.jpg';
// });

Vehicles.attachSchema(new SimpleSchema({
  vehicle: {
    type: Object,
    // optional: true
  },
  'vehicle.name': {
    type: String,
    label: 'Vehicle Name',
    autoform: {
      'label-type': 'floating',
      placeholder: 'Vehicle name'
    },
    max: 200
  },
  'vehicle.number': {
    type: String,
    // optional: true,
    label: 'Vehicle Number',
    // regEx: SimpleSchema.RegEx.Email,
    autoform: {
      'label-type': 'floating',
      placeholder: 'Vehicle Number'
    }
  },
  'vehicle.chassis': {
    type: String,
    // optional: true,
    label: 'Chassis Number',
    autoform: {
      'label-type': 'floating',
      placeholder: 'Chassis Number'
    }
  },
  'vehicle.type': {
    type: String,
    // optional: true,
    label: 'Type',
    autoform: {
      options: [
        {value: 'Bike.png', label: 'Bike'},
        {value: 'Scooter.png', label: 'Scooter'},
        {value: 'Car.png', label: 'Car'},
        {value: 'Truck.png', label: 'Truck'}
      ],
      'label-type': 'floating',
      placeholder: 'Type'
    }
  },
  'vehicle.capacity': {
    type: Number,
    // optional: true,
    autoform: {
      'label-type': 'floating',
      placeholder: 'Capacity'
    }
  },
  'vehicle.uniqId' : {
    type: String,
    optional: true,
    // regEx: SimpleSchema.RegEx.Id,
    autoform: {
      'label-type': 'placeholder',
      placeholder: 'Unique Id of vehicle'
    }
  },
  'vehicle.amount': {
    type: Number,
    // optional: true,
    autoform: {
      'label-type': 'floating',
      placeholder: 'Amount'
    }
  },
  details: {
    type: Object,
    // optional: true
  },
  'details.notes': {
    type: String,
    // optional: true,
    label: 'Notes',
    optional: true,
    autoform: {
      rows: 10,
      'label-type': 'stacked'
    }
  },
  'customerId': {
    type: String,
    // optional: true
  }
}));

STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"
];

Customers = new Mongo.Collection('customers');

Customers.attachSchema(new SimpleSchema({
  name: {
    type: Object
  },
  'name.first': {
    type: String,
    label: 'First Name',
    autoform: {
      'label-type': 'floating',
      placeholder: 'First Name'
    },
    max: 200
  },
  'name.last': {
    type: String,
    label: 'Last Name',
    autoform: {
      'label-type': 'floating',
      placeholder: 'Last Name'
    },
    max: 200
  },
  // vehicle: {
  //   type: [Object],
  //   optional: true
  // },
  // 'vehicle.$.name': {
  //   type: String,
  //   label: 'Vehicle Name',
  //   autoform: {
  //     'label-type': 'floating',
  //     placeholder: 'Vehicle name'
  //   },
  //   max: 200
  // },
  // 'vehicle.$.number': {
  //   type: String,
  //   optional: true,
  //   label: 'Vehicle Number',
  //   // regEx: SimpleSchema.RegEx.Email,
  //   autoform: {
  //     'label-type': 'floating',
  //     placeholder: 'Vehicle Number'
  //   }
  // },
  // 'vehicle.$.chassis': {
  //   type: String,
  //   optional: true,
  //   label: 'Chassis Number',
  //   autoform: {
  //     'label-type': 'floating',
  //     placeholder: 'Chassis Number'
  //   }
  // },
  // 'vehicle.$.type': {
  //   type: String,
  //   optional: true,
  //   label: 'Type',
  //   autoform: {
  //     options: [
  //       {value: 'Bike', label: 'Bike'},
  //       {value: 'Scooter', label: 'Scooter'},
  //       {value: 'Car', label: 'Car'},
  //       {value: 'Truck', label: 'Truck'}
  //     ],
  //     'label-type': 'floating',
  //     placeholder: 'Type'
  //   }
  // },
  // 'vehicle.$.capacity': {
  //   type: Number,
  //   optional: true,
  //   autoform: {
  //     'label-type': 'floating',
  //     placeholder: 'Capacity'
  //   }
  // },
  // 'vehicle.$.uniqId' : {
  //   type: String,
  //   optional: true,
  //   regEx: SimpleSchema.RegEx.Id,
  //   autoform: {
  //     'label-type': 'placeholder',
  //     placeholder: 'Unique Id of vehicle'
  //   }
  // },
  // details: {
  //   type: Object,
  //   optional: true
  // },
  // 'details.notes': {
  //   type: String,
  //   optional: true,
  //   label: 'Notes',
  //   optional: true,
  //   autoform: {
  //     rows: 10,
  //     'label-type': 'stacked'
  //   }
  // }
  location: {
    type: Object
  },
  'location.address': {
    type: String,
    autoform: {
      'label-type': 'placeholder',
      placeholder: 'Address'
    }
  },
  'location.city': {
    type: String,
    max: 200
  },
  'location.state': {
    type: String,
    autoform: {
      options: _.map(STATES, function (state) {
        return {label: state, value: state};
      })
    }
  },
  // 'location.$.type': {
  //   type: String,
  //   label: 'Label',
  //   autoform: {
  //     options: [
  //       {value: 'Work', label: 'Work'},
  //       {value: 'Home', label: 'Home'},
  //       {value: 'School', label: 'School'},
  //       {value: 'Other', label: 'Other'}
  //     ]
  //   }
  // },
  details: {
    type: Object
  },
  'details.notes': {
    type: String,
    label: 'Notes',
    optional: true,
    autoform: {
      rows: 10,
      'label-type': 'stacked'
    }
  }
}));

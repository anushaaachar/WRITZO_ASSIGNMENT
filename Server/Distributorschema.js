const mongoose = require("mongoose");

const Distributor = mongoose.Schema({
  DistributorName: {
    type: String,
  },
  ContactPerson: {
    type: String,
  },
  ContactEmail: {
    type: String,
  },
  ContactNumber: {
    type: String,
  },
  AddressLine1: {
    type: String,
  },
  AddressLine2: {
    type: String,
  },
  DistributorGSTN: {
    type: String,
  },
  City: {
    type: String,
  },
  State: {
    type: String,
  },
  Country: {
    type: String,
  },
  Pincode: {
    type: String,
  },
  Status: {
    type: String,
  },
  
});

module.exports = mongoose.model("Distributor", Distributor);

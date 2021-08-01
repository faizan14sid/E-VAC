import mongoose from "mongoose";

const userDetailsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  details: [
    {
      fullName: { type: String, required: true },
      mobileNumber: { type: Number, required: true },
      location: {type: String, required: true},
      alternatePhoneNumber: {type: Number},
    },
  ],
});

module.exports = mongoose.model("UserDetails", userDetailsSchema);

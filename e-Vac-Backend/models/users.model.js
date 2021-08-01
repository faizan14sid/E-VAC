import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: [true, "Number already in use. Please try to login"],
        validate: [(val) => validator.isPhoneNumber(val)]
    },
    otp: {
        type: String,
        required: true,
        minlength: [4, "Otp should have 4 characters"]
    },
    picture:  {
        type: String
    },
    id: {
        type: String
    }
},
    { timestamps: true }
);

var UserModel = mongoose.model('UserModel', UserSchema);

export default UserModel;
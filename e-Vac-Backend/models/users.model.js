import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: [true, "This username is already in use. Please try another username"],
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already in use. Please try to login"],
        validate: [(val) => validator.isEmail(val)]
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "Password should have atleast 8 characters"]
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
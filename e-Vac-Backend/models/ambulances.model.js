import mongoose from 'mongoose';
import validator from 'validator';

const AmbulanceSchema = new mongoose.Schema({
    ambulanceNumber: {type: String , required: true},
    hospitalName: {type: String,required: true},
    driverName:{type: String,required: true},
    driverPhone: {type:Number,required: true},
    price: {type: Number,required: true},
    productImage:{type:String,required:true},
    reviewRating: {type: Number,required: true},
    reviewCount:{type:Number,required:true},
    distance:{type:Number,required:true},
    online:{type:Boolean,required:true,default:true},
    available:{type:Boolean,required:true,default:true},
    location:{type:[Number],index:'2d'}       // [<longitude>, <latitude>]   // create the geospatial index
},
);

var AmbulanceModel = mongoose.model('AmbulanceModel', AmbulanceSchema);

export default AmbulanceModel;

// const orderSchema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     order: [
//         {
//             product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
//             price: { type: Number, required: true},
//             quantity: Number
//         }
//     ],
//     address: { type: mongoose.Schema.Types.ObjectId, ref: 'UserAddress' },
//     orderDate: { type: Date, default: Date.now() },
//     paymentType: String,
//     paymentStatus: String,
//     isOrderCompleted: { type: Boolean, default: false }
// });
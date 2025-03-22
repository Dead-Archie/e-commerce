import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CustomerSchema = new Schema({
    email: String,
    password: String,
    phone: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const CustomerModel = model('Customers', CustomerSchema);

export default CustomerModel;

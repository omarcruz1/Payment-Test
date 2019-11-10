const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create payment model and schema
const PaymentSchema = new Schema({
    status: {
        type: String,
        required: false
    },
    firstName: {
        type: String,
        required: [false, 'Field is not required']
    },
    lastName: {
        type: String,
        required: [false, 'Field is not required']
    },
    validThru: {
        type: String,
        required: [false, 'Field is not required']
    },
    safeIdentifier: {
        type: String,
        required: [false, 'Field is not required']
    },
    amount: {
        type: String,
        required: [false, 'Field is not required']
    },
    description: {
        type: String,
        required: [false, 'Field is not required']
    },
    subtotal: {
        type: String,
        required: [false, 'Field is not required']
    },
    tax: {
        type: String,
        required: [false, 'Field is not required']
    },
    brand: {
        type: String,
        required: [false, 'Field is not required']
    },
    createdAt: {
        type: String,
        required: [false, 'Field is not required']
    },
    transactionID: {
        type: String,
        required: [false, 'Field is not required']
    },
    cancelComment: {
        type: String,
        required: [false, 'Field is not required']
    },
});

const Payment = mongoose.model('payment', PaymentSchema);
module.exports = Payment;
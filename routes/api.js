const express = require('express');
const router = express.Router();
const Payment = require('../models/payment');

//GET list of payments
router.get('/payments', function(req, res, next) {
    Payment.find({}).then(function(payments) {
        res.send(payments);
    }).catch(next);
});

//GET a single payment
router.get('/payments/:id', function(req, res, next) {
    Payment.findById({_id: req.params.id}).then(function(payment) {
        res.send(payment);
    }).catch(next);
});

//ADD new payment
router.post('/payments', function(req, res, next) {
    Payment.create(req.body).then(function(payment){
        res.send(payment);
    }).catch(next);
});

//UPDATE payment
router.put('/payments/:id', function(req, res, next) {
    Payment.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(payment) {
        res.send(payment);
    }).catch(next);
});

//DELETE payment
router.delete('/payments/:id', function(req, res, next) {
    Payment.findByIdAndRemove({_id: req.params.id}).then(function(payment) {
        res.send(payment);
    }).catch(next);
});

module.exports = router;
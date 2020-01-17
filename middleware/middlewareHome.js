const express = require('express');


exports.Home = function (req, res, next) {
    if (req.query.leng == 'ua') {
        res.send("====== привіт, ви на головній сторінці ======")
    }
    if (req.query.leng == 'ru') {
        res.send('====== привет вы на главной странице ======')
    }
    if (req.query.leng == 'en') {
        res.send("======HELLO, THERE IS HOME PAGE ======")
    }
    next();
};

exports.HomeTwo = function (req, res) {
    console.log('midel srabotal');
    res.send("======HELLO, THERE IS HOME PAGE ======")
};

exports.Post = [function (req, res, next) {

    if (Object.keys(req.body).length === 0) {
        res.send('ssdfsdfsdfs');
    }else{ next()}

}, function (req, res, next) {
     for (let value of Object.values(req.body)) {
         if (value.length === 0) { next(new Error('no value'))}
        } next()

}];

exports.Error = function (err, req, res, next){
    res.send(`sory ${err}`)
}
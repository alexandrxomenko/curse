exports.Products =  [function (req, res, next) {
    console.log('==midelwear1==');

    next();
},function (req, res, next) {
    console.log('==midelwear2==');
    res.send('sfsdfs');

    next();
},function (req, res, next) {
    console.log('==midelwear3==');

    next();
}
]


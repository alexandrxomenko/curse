
exports.getUsers = function (req, res) {
    setTimeout(()=>res.send('sdadada'), 5000)
};

exports.postUsers =  function (req, res) {
    if (!req.body) {
        res.sendStatus(400);
    } else {
        console.log(req.body);
        res.send("ok")
    }
}
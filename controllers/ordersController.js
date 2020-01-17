class OrdersController {

    static index (req, res) {
        res.send('index')
    };

    static create(req, res) {
        res.send('create')
    };

    static read(req, res) {
        res.send('read')
    };

    static update(req, res) {
        res.send('update')
    };

    static delete(req, res) {
        res.send('delete')
    };
}
module.exports = OrdersController;




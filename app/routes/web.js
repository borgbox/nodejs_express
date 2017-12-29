var clientController = require('../controllers/clienteController')

module.exports = function (app) {

    app.get(`/`, function (req, res) {
        clientController.index(req, res);
    });

    app.post(`/`, function (req, res) {
        clientController.store(req, res);
    });

    app.get(`/detalhe/:id`, function (req, res) {
        //console.log(req.params.id);
        clientController.show(req, res);
    });

    app.get(`/contato`, function (req, res) {
        res.render('sites/contato');
    });

}
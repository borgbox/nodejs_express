var clienteModel = require('../models/clienteModel');

module.exports.index = function (req, res) {
    clienteModel().all(function (erro, resultado) {
        res.render('sites/home', {
            lstClientes: resultado,
            erros: {},
            dados:{}
        });
    });
}

module.exports.store = function (req, res) {
    var dados = req.body;

    //Inicio - Usando a biblioteca express validator
    req.assert('nome', 'Preencha um nome').notEmpty();
    req.assert('email', 'Preencha um e-mail').notEmpty();
    req.assert('nome', 'Nome tem de ter de 3 a 20 caracteres').len(3,20);
    req.assert('email', 'E-mail em formato inválido').isEmail();

    var validacaoErros = req.validationErrors();
    if (validacaoErros) {
        console.log(validacaoErros);
        clienteModel().all(function (erro, resultado) {
            res.render('sites/home', {
                lstClientes: resultado,
                erros: validacaoErros,
                dados:dados
            });
        });
        return;
    }
    //Fim

    clienteModel().save(dados, function (erro, resultado) {
        res.redirect('/');
    });
}

module.exports.show = function (req, res) {
    clienteModel().find(req.params.id, function (erro, resultado) {

        if (!erro) {
            res.redirect('/');
        } else {
            console.log('Erro ao adicionar');
            res.redirect('/');
        }


    });
}
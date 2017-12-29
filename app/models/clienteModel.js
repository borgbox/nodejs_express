var db = require('../../config/db');

module.exports = function () {

    this.all = function (retorno) {

        return db().query('select * from clientes', retorno);

        // return [{
        //     nome: "Francisco",
        //     email: "franciscofreitas2001@gmail.com"
        // }, {
        //     nome: "Marley",
        //     email: "marley@gmail.com"
        // }]
    };

    this.find = function (id, retorno) {
        var con = db();
        return con.query(`select * from clientes where id = ?`, id, retorno);
    };

    this.save = function(dados,retorno){
        var con = db();
        //A biblioteca para mysql resolve sozinha a questão dos nomes dos campos a partir do json
        return con.query(`insert into clientes set ?`, dados, retorno);
    }

    return this;

};
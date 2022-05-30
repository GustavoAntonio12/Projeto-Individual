var postagensModel = require("../models/postagensModel");

function listarPostagens(req, res) {

    postagensModel.listarPostagens()
        .then(function (resultado) {
            if (resultado.length > 0) {
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
                res.send(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function listarPostagensUsuario(req, res) {
    var id = req.params.idServer;
    console.log("aQUI AOSDAS",id);

    postagensModel.listarPostagensUsuario(id)
        .then(function (resultado) {
            if (resultado.length > 0) {
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
                res.send(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrar(req, res) {
    var id = req.body.idServer;
    var titulo = req.body.tituloServer;
    var postagem = req.body.postagemServer;

    postagensModel.cadastrar(id,titulo,postagem)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listarPostagens,
    listarPostagensUsuario,
    cadastrar
}
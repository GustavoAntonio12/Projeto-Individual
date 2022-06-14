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
function listarQuantidadePostagensAgrupadoDia(req, res) {
    var id = req.params.idServer;
    postagensModel.listarQuantidadePostagensAgrupadoDia(id)
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

function deletar(req, res) {
    var id = req.params.idServer;
    postagensModel.deletar(id)
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
function alterar(req, res) {
    var id = req.body.idServer;
    var id2 = req.body.id2Server;
    var texto = req.body.textoServer;
    var titulo = req.body.tituloServer;

    postagensModel.alterar(id,id2,titulo,texto)
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

function postagemAtualizar(req, res) {
    var id = req.params.idServer;
    var id2 = req.params.id2Server;
    postagensModel.postagemAtualizar(id,id2)
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
    listarQuantidadePostagensAgrupadoDia,
    cadastrar,
    deletar,
   alterar,
   postagemAtualizar,
}
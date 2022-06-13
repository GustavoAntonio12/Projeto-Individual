var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    var id = req.body.idServer;
    var id2 = req.body.idQuiz;
    var resposta = req.body.respostaServer;


    quizModel.cadastrar(id,id2,resposta)
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
function listarAcertosAgrupadoDia(req, res) {
    var id = req.params.idServer;
    quizModel.listarAcertosAgrupadoDia(id)
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

function personaTeste(req, res) {
    var id = req.params.idServer;
    quizModel.personaTeste(id)
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


// #dc9bbb
module.exports = {
    cadastrar,
    listarAcertosAgrupadoDia,
    personaTeste
}
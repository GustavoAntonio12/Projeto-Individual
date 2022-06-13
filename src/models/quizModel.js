var database = require("../database/config");

function cadastrar(idUsuario,idQuiz,resultado) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar()", idUsuario, idQuiz, resultado);

    var instrucao = `INSERT INTO resultado VALUES (${idUsuario}, ${idQuiz}, NOW(), '${resultado}');`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarAcertosAgrupadoDia(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarQuantidadePostagensAgrupadoDia()",);
    var instrucao = `
    SELECT dataResultado as 'data',resultado as 'quantidade' FROM resultado WHERE fkUsuario =${idUsuario} AND fkQuiz=101 GROUP BY dataResultado;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function  personaTeste(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function personaTeste()",);
    var instrucao = `
    SELECT dataResultado as 'data',resultado as 'persona' FROM resultado WHERE fkUsuario =${idUsuario} AND fkQuiz=100 ORDER BY dataResultado DESC LIMIT 1;`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarAcertosAgrupadoDia,
    cadastrar,
    personaTeste
   
}

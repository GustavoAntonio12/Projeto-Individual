var database = require("../database/config");

function listarPostagens() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function lisarPostagens()");
    var instrucao = `
        SELECT * FROM postagens INNER JOIN usuario ON idUsuario = fkUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPostagensUsuario(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPostagensUsuarios()", idUsuario);
    var instrucao = `
        SELECT * FROM postagens  INNER JOIN usuario ON idUsuario WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function cadastrar(idUsuario,titulo,postagem) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar()", idUsuario,titulo,postagem);
    var instrucao = `INSERT INTO postagens (tituloPostagens, textoPostagens, dataPostagens, fkUsuario) VALUES ('${titulo}', '${postagem}', NOW(),${idUsuario});`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    listarPostagens,
    cadastrar,
    listarPostagensUsuario
}
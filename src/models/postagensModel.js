var database = require("../database/config");

function listarPostagens() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function lisarPostagens()");
    var instrucao = `
        SELECT * FROM postagens INNER JOIN usuario ON idUsuario = fkUsuario ORDER BY dataPostagens DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPostagensUsuario(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPostagensUsuarios()", idUsuario);
    var instrucao = `
        SELECT * FROM postagens  INNER JOIN usuario ON idUsuario = fkUsuario WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function listarQuantidadePostagensAgrupadoDia(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarQuantidadePostagensAgrupadoDia()",);
    var instrucao = `
    SELECT COUNT(*) as 'quantidade',dataPostagens as 'data' FROM postagens WHERE fkUsuario = ${idUsuario}  GROUP BY DAY(dataPostagens);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function  postagemAtualizar(idUsuario,idPostagens) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarQuantidadePostagensAgrupadoDia()",);
    var instrucao = ` SELECT tituloPostagens as 'titulo', textoPostagens as 'texto' FROM postagens WHERE fkUsuario = ${idUsuario} AND idPostagens = ${idPostagens};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alterar(idUsuario,idPostagem,titulo,texto) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar()", idPostagem);
    var instrucao = `
    UPDATE postagens SET tituloPostagens = '${titulo}', textoPostagens = '${texto}' WHERE fkUsuario = ${idUsuario} AND idPostagens = ${idPostagem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function deletar(idPostagem) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar()", idPostagem);
    var instrucao = `
       DELETE FROM postagens WHERE idPostagens = ${idPostagem};
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
    deletar,
    cadastrar,
    listarPostagensUsuario,
    listarQuantidadePostagensAgrupadoDia,
    alterar,
    postagemAtualizar
}

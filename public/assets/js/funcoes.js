// sessão

function signOut() {
    sessionStorage.clear();
    window.location.replace('../../sign-in.html');
  }
  function obterDadosSession(){
    var json = JSON.parse(sessionStorage.USUARIO);
    return json;
  }
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email == null && nome == null) {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}




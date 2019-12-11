function cadastrar(){
    var valorNome = nome.value;
    var valorEmail = email.value;
    var valorSenha = senhaCadastro.value;
    var valorSenhaConfirmar = senhaConfirmar.value;

    if (valorNome == '' || valorEmail == '' || valorSenha == '' ||
        valorSenhaConfirmar.length == ''){
        div_cadastro.innerHTML = 'Preencha todos os campos';
    }
}
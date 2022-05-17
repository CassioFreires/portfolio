//Array dos dos input
const pessoa = Array();
pessoa[0] = document.getElementById('input-nome');
pessoa[1] = document.getElementById('input-email');
pessoa[2] = document.getElementById('input-texto');

//Ação que envia formulario
const enviarFormulario = () => {
    
    capturarEvento();
    validacaoFormulario();

}

//Ação que valida os inputs do formulario
const validacaoFormulario = () => {
    const inputNomeRecuperado = pessoa[0].value;
    const inputEmailRecuperado = pessoa[1].value;
    const inputTextoRecuperado = pessoa[2].value;
    //Validacao do nome
    if (inputNomeRecuperado === '' ) {
        alert('Campo inválido');
        return false;
    }
    window.document.getElementById('input-nome').value = '';
    //Validacao do email
    if(inputEmailRecuperado.indexOf('@') === -1 || inputEmailRecuperado.indexOf('.com') === -1){
        alert('Campo e-mail inválido, tento novamente');
        pessoa[1].value = '';
        return false;
    } 
    window.document.getElementById('input-email').value = '';
    //Validacao da mensagem de texto
    if(inputTextoRecuperado.length >= 100){
        alert('Limite maximo de 100 caracters');
        pessoa[2].value = '';
        return false;
    }
    window.document.getElementById('input-texto').value = '';
    window.document.location = 'tela_email_enviado.html';

}


//Ação que captura os eventos
const capturarEvento = () => {
    return event.preventDefault()
}
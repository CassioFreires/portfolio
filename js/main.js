const selectForm = document.querySelector('#form');
const selectInputNome = document.querySelector('#input-nome');
const selectInputEmail = document.querySelector('#input-email');
const selectInputtexto = document.querySelector('#texto');



function CriarPessoaFormulario(nome, email, texto) {
    this.nome = nome;
    this.email = email;
    this.texto = texto;
}


selectForm.addEventListener('click', e => {
    const el = e.target;
    if (el.classList.contains('bnt-enviar-formulario')) {
        
        const p1 = new CriarPessoaFormulario(selectInputNome.value, selectInputEmail.value, selectInputtexto.value)
        alert('Email enviado com sucesso')
        
    }

})
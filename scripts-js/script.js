function enviarFormulario(){
    
    const peso = document.getElementById("txtPeso").value;
    const altura = document.getElementById("txtAltura").value;
    
    pessoa = {
        nome: document.getElementById("txtNome").value,
        peso: document.getElementById("txtPeso").value,
        altura: document.getElementById("txtAltura").value,
        sexo: document.getElementById("txtSexo").value,
        avaliacao: peso / (altura * 2)
    };
    
    const msg = `Nome: ${pessoa.nome}\nPeso: ${pessoa.peso}\nAltura: ${pessoa.altura}\nAvaliacao: ${pessoa.avaliacao}\nSexo: ${pessoa.sexo}`
    document.getElementById("txtDados").value = msg;
    return false;

}
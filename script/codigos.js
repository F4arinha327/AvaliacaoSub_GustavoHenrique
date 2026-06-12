function exibeDados(event){
    event.preventDefault();
    let nome = document.getElementById("ipNome").value;
    let email = document.getElementById("ipEmail").value;
    let telefone = document.getElementById("ipTelefone").value;
    let DtNascimento = document.getElementById("ipDtNascimento").value;
    let partes= DtNascimento.split("-");
    let data = new Date(partes[0], partes[1]-1, partes[2]);
    let dataFomatada= data.toLocaleDateString("pt-BR");
    
    let mensagem = document.getElementById("taMensagem").value;

    let OndeConheceu = document.getElementById("slConheceu");
    let ComoConheceu = OndeConheceu.options[OndeConheceu.selectedIndex].text;
    let retorno = "CONFIRMAÇÃO DOS DADOS";


    document.getElementById("resposta").innerText= retorno ;
    document.getElementById("pNome").innerText= "Nome: " + nome ;
    document.getElementById("pEmail").innerText= "Email: " + email;
    document.getElementById("pTelefone").innerText= "Telefone: " + telefone;
    document.getElementById("pData").innerText= "Data de Nascimento: " + dataFomatada;
    document.getElementById("pConheceu").innerText= "Motivo de contato: " + ComoConheceu;
    document.getElementById("pMensagem").innerText= "Mensagem: " + mensagem;
}
function EnviarForm(){
    alert("Dados enviados com sucesso!")
}
import api  from "../services/api";

// referências do DOM HTML

const inpCod = document.getElementById('inpCod');
const inpNome = document.getElementById('inpNome');
const inpEmail = document.getElementById('inpEmail');
const inpUf = document.getElementById('inpUf');
const inpPassword = document.getElementById('inpPassword');
const inpLevel = document.getElementById('inpLevel');

const btnAlterar = document.getElementById('btnAlterar');

//lógica de Programação

function getDados(){
    const nome = inpNome.value;
    const email = inpEmail.value;
    const uf = inpUf.value;
    const password = inpPassword.value;
    const level = inpLevel.value;
    
    // A constante data é um objeto JSON 
    const data ={
        nome : nome,
        email : email,
        uf : uf,
        password : password,
        level : level
    }
    return data;
}


async function updateFor(){
    const codfor = inpCod.value;
    const data = getDados();
    const response = await api.put(`/fornecedor/${codfor}`, data);
    console.log(response);
}


btnAlterar.onclick = ()=>{
    updateFor();
};
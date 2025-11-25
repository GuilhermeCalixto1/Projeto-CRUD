import api from '../services/api.js';
//Referencias DOM

const inpCodigo = document.getElementById('inpCodigo');
const btnExcluir = document.getElementById("btnExcluir");

//Logica

async function exclusao(){
    const codfor = inpCodigo.value;
    const resposta = await api.delete(`/fornecedor/${codfor}`);
    console.log(resposta);
};

btnExcluir.onclick = ()=>{
    exclusao();
}

btnVoltar.onclick = ()=>{
     window.location.href = '/src/pages/index.html';
};

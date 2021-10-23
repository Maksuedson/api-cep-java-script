"use strict";

const preencherFormulario = (endereco) => {
  document.getElementById("endereco").value = endereco.logradouro;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("cidade").value = endereco.localidade;
  document.getElementById("estado").value = endereco.uf;
};

const limparFormulario = (endereco) => {
    document.getElementById("endereco").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
  };


const cepValido = (cep) => cep.length == 8 ;

const pesquisarCep = async () => {
    limparFormulario();
    
  const cep = document.getElementById("cep").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;

  if (cepValido(cep)) {
    const dados = await fetch(url);
    const endereco = await dados.json();

    if (endereco.hasOwnProperty("erro")) {
      document.getElementById("nome").value = "CEP não encontrado!";
    } else {
      preencherFormulario(endereco);
    }
  }
};

document.getElementById("cep").addEventListener("focusout", pesquisarCep);

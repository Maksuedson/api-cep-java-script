- https://maksuedson.github.io/api-cep-java-script/
- Script javaScript
```bash
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

```


- Html Busca CEP
```bash
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/styles.css">
    <script src="./js/main.js" type="module" defer></script>
    <title>Cadastro</title>
</head>
<body>
    <main class="container">
        <h1 class="title">Cadastro de Clientes</h1>
        <div class="row">
            <div class="inputbox">
                <input type="text" id="nome" required>
                <label for="nome">Nome</label>
            </div>
            <div class="inputbox">
                <input type="text" id="email"  required>
                <label for="email">Email</label>
            </div>
        </div>
        <div class="row">
            <div class="inputbox">
                <input type="text" id="cep"  required>
                <label for="cep">CEP</label>
            </div>
            <div class="inputbox">
                <input type="text" id="endereco"  required>
                <label for="endereço">Endereço</label>
            </div>
            <div class="inputbox">
                <input type="text" id="numero"  required>
                <label for="numero">Número</label>
            </div>
        <!-- </div> -->
        <!-- <div class="row"> -->
            <div class="inputbox">
                <input type="text" id="bairro"  required>
                <label for="bairro">Bairro</label>
            </div>
            <div class="inputbox">
                <input type="text" id="cidade"  required>
                <label for="cidade">Cidade</label>
            </div>
            <div class="inputbox">
                <input type="text" id="estado"  required>
                <label for="estado">Estado</label>
            </div>
        </div>
        <div class="row">
            <button>Salvar</button>
        </div>
    </main>
    <footer>
        Maksuedson &#169 2021
    </footer>
</body>
</html>
```


- Script CSS
```bash
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

:root {
    --bg-color: #000;
    --primary-color: #EBCE07
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: var(--bg-color) ;
}

.container {
    flex-grow: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    padding: 20px;
    gap: 40px;
}

.title {
    font-size: 40px;
    text-align: center;
    user-select: none;
    color: var(--primary-color);
}

.row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
}
.inputbox {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    height: 40px;
}

.inputbox label {
    position: relative;
    top:0;
    left: 10px;
    font-size: 20px;
    color: var(--primary-color);
    transition: .5s;
    cursor: text;
}

.inputbox input {
    position: absolute;
    background-color: var(--primary-color);
    width: 100%;
    height: 4px;
    bottom: 0;
    box-shadow: none;
    border: none;
    outline: none;
    border-radius: 2px;
    transition: .5s;
    font-size: 20px;
    font-weight: bold;
    padding: 0 10px;
}

.inputbox input:focus,
.inputbox input:valid {
    height: 100%;
}

.inputbox input:focus + label,
.inputbox input:valid + label {
    top: -40px;
    left: 0;
}

.container button {
    justify-self: center;
    width: 200px;
    height: 50px;
    border:none;
    outline: none;
    cursor: pointer;
    background-color: var(--primary-color);
    font-size: 20px;
    font-weight: bold;
    border-radius: 2px;
}

footer {
    color: var(--primary-color);
}
```

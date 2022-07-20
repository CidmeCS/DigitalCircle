function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(texto) {
    
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdTexto = document.createElement("td");
    tdData = document.createElement("td");

    tdId.innerHTML = texto.id
    tdTexto.innerHTML = texto.col_texto
    tdData.innerHTML = `${texto.col_dt.substring(0,10)} ${texto.col_dt.substring(11,19)}`

    linha.appendChild(tdId);
    linha.appendChild(tdTexto);
    linha.appendChild(tdData);

    return linha;
}

function main() {
    let data = fazGet("http://localhost:3333/api/get/textos");
    let textos = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    
    textos.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

//main()
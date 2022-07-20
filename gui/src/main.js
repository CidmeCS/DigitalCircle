function fazGet(url) {
    let request = new XMLHttpRequest()
    try {
        request.open("GET", url, false)
        console.log(request)
        request.send()
        return request.responseText
        
    } catch (error) {
        //console.log(error)
    }
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
//fazGet()
//criaLinha()
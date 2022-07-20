

function fazPost(url, body) {
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}

function listarTextos() {
    event.preventDefault()
    let url = "http://localhost:9000/api/post/texto"
    let col_texto = document.getElementById("col_texto").value
    body = {
        "col_texto": col_texto,
    }
    fazPost(url, body)
}
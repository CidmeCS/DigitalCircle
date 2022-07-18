
console.log("...extern")

function fazPost(url, body) {
    console.log('...faz post')
    console.log("Body=", body)
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
    console.log('...listando texto')
    event.preventDefault()
    let url = "http://localhost:3333/api/post/texto"
    let col_texto = document.getElementById("col_texto").value
    console.log(col_texto)

    body = {
        "col_texto": col_texto,
    }

    fazPost(url, body)
}
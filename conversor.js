let resultado = document.getElementById("resultado")
let valoremreal = Number(document.getElementById("valor").value)

function converterDolar(){
    let resultado = document.getElementById("resultado")
    let valoremreal = Number(document.getElementById("valor").value)
    let valorConvertido = valoremreal/5.29
    let valorConvertidoFixed = valorConvertido.toFixed(2)
    resultado.innerHTML = `&#x1F911 R$${valoremreal} convertidos em dolar correspondem à $${valorConvertidoFixed}`

}

function converterEuro(){
    let resultado = document.getElementById("resultado")
    let valoremreal = Number(document.getElementById("valor").value)
    let valorConvertido = valoremreal/6.20
    let valorConvertidoFixed = valorConvertido.toFixed(2)
    resultado.innerHTML += ` <br> &#x1F911 R$${valoremreal} convertidos em euros correspondem à €${valorConvertidoFixed}`

}

function converterLibra(){
    let resultado = document.getElementById("resultado")
    let valoremreal = Number(document.getElementById("valor").value)
    let valorConvertido = valoremreal/7.26
    let valorConvertidoFixed = valorConvertido.toFixed(2)
    resultado.innerHTML+= `<br> &#x1F911 R$${valoremreal} convertidos em libra correspondem à £${valorConvertidoFixed}`
}
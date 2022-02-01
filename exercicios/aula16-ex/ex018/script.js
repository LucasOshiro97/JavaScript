var num = window.document.getElementById('txtn')
var lista = window.document.getElementById('selec')
var res = window.document.getElementById('res')
var valores = []

function isnumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    } else {
        return false
    }
} 

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function conta(){
     if(isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Vlor inválido ou já encontrado na lista.')
    }
    num.value =''
    num.focus() // deixar no foco da caixa para adicionar o numero
}

    function finalizar(){
        if (valores.length == 0){
            window.alert('Adicione valores antes de finalizar!')
        } else {
            var tot = valores.length
            var maior = valores[0]
            var menor = valores[0]
            var soma = 0
            var media = 0
            for(let pos in valores){
            soma += valores[pos]
                if(valores[pos]>maior)
                    maior = valores[pos]
                if(valores[pos]<menor)
                    menor = valores[pos]
                }
            }
            media = soma/tot
            res.innerHTML = ''
            res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados</p>`
            res.innerHTML +=`<p>O maior valor informado foi ${maior}.</p>`
            res.innerHTML +=`<p>O menor valor informado foi ${menor}.</p>`
            res.innerHTML +=`<p>Somando todos os valores, temos ${soma}.</p> `
            res.innerHTML += `<p>A média entre os números é ${media}</p>`
        }
    


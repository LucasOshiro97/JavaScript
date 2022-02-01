function parimpar(n) {
    if (n%2 == 0){
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

var res = parimpar(4)   // ou fazer direto console.log(parimpar(4))
console.log(res)
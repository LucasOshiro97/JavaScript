var num = [5,2,8,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`Os valores são: ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(8)
console.log(`O valor está na posição ${pos}`)
var pos = num.indexOf(4)
console.log(`O valor está na posição ${pos}`)

var poss = num.indexOf(4)
if (poss == -1){
   console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${poss}`)
}
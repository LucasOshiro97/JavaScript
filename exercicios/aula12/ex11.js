var idade = 23
if (idade<16){
    console.log('Não vota')
} else {
    if (idade >= 16 && idade<18 || idade>65){
        console.log('voto opcional')
    } else{
        console.log('voto ogrigatório')
    }
}
function contar(){
    var ini = window.document.getElementById('tx')
    var fim = window.document.getElementById('txt')
    var passo = window.document.getElementById('txtx')
    var res = window.document.getElementById('res')
    
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
   
   if (ini.value.length==0 || fim.value.length == 0 || passo.value.length == 0){
     res.innerHTML = ('Impossível contar!')
   } else {
     res.innerHTML = 'Contando: <br>'
    
    if (p<=0){
      window.alert('Passo inválido! Considerando PASSO 1')
      p=1
    }
    if (i<f){
      // contagem crescente
    while(i<=f){
      res.innerHTML += ` ${i}`
      res.innerHTML += String.fromCodePoint(0x1F449);
        i+=p
    }
    if(i>f){
      res.innerHTML += String.fromCodePoint(0x1F3C1);
  }
  } else {
    // contagem decrescente
      while(i>=f){
        res.innerHTML += ` ${i} \u{1F449}`
          i-=p
      }
      if(i==0 || i<f){
        res.innerHTML += '\u{1F3C1}'
      }
    }
    } 
}
function tabuada() {
   var tabu = window.document.getElementById('tab')
   var tabua = window.document.getElementById('tabu')

   t = Number(tabu.value)

   if (tabu.value.length == 0 ){
       window.alert('Digite um número por favor!')
   } else {
    tabua.innerHTML = ''
        for (var c=1;c<=10;c++){
            var item = document.createElement('option')
            var calc = c*t
           item.text= `${t}x${c}=${calc}`
           item.value = `tab${c}`
           tabua.appendChild(item)
        }

   }
}
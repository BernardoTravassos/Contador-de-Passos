function calcular(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (ini.value.length == 0 || fim.value.length == 0 || ini.value.length >= fim.value.length || passo.value.length == 0){
        window.alert('ERROR')
    } else{
        res.innerHTML = 'Contagem: '

        for(var c = i; c <= f; c += p){
            res.innerHTML += `${c} `
        }
      }
       
}
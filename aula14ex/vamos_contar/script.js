function iniciar(){

    var inic = document.getElementById('inicio')
    var comeco = Number(inic.value)

    var fi = document.getElementById(`fim`)
    var fim = Number(fi.value)

    var pas = document.getElementById('passo')
    var passo = Number(pas.value)

    console.log(`${fim}`)  //testando componentes
    console.log(passo)
    console.log(comeco)


    var res = document.querySelector(`div#res`) 

    res.innerHTML = (``)
    

    if(passo === 0){
        window.alert('Passo inválido vamos usar 1')
        passo = 1
    }

   if(fim > comeco){


   while (comeco < fim){
        res.innerHTML += (`${comeco}  👉`)
        comeco = comeco + passo 

    }

    res.innerHTML += (`${fim}🏁`)

   } else{
       res.innerHTML=('Digite um valor válido')
   }
    

}
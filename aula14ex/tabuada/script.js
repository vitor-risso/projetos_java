function gerar(){
    // pegando valor digitado. string ~ number
    var txtv = document.getElementById(`txt`)
    var num = Number(txtv.value)
    console.log(num)

    //adicionar caixa de texto 
   //  var res = document.querySelector(`div#res`)  -> n precisa usaamos o opitions

    //selecionando select
    var tab = document.getElementById(`tabs`)


    //res.innerHTML=(``)   -> tava dando erro no códio (não sei pq coloquei isso)

    tab.innerHTML = ``

    if(num == 0){

        window.alert('Digite um Número')

    }
    else{


    for (var index = 1; index <= 10; index++) {

        
     
        var num2 = num * index

        console.log(num2)

        let txt = document.createElement('option')

        txt.text = `${num} x ${index} = ${num2}`

        tab.appendChild(txt) 
        
        
        }
    }


}
function adicionar(){
    var res = document.getElementById(`res`)
    var n = document.getElementById(`txt`) 
    var num = Number(n.value) 
    var jan = document.getElementById(`janela`)

    if(num == 0){
        window.alert('Digite um número valido')
    } else{
         
        for (var i = num; i <100, i++){
            i = [num]
            console.log(`${i.length}`)
        }
       
        let txt = document.createElement('option')

        txt.text = `Valor ${num} adicionado`

        jan.appendChild(txt)

        console.log(`${num.length}`)
    }
    
}
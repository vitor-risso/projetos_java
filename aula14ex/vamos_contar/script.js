function iniciar(){

    var inic = document.getElementById('inicio')
    var comeco = Number(inic.value)

    var fi = document.getElementById(`fim`)
    var fim = Number(fi.value)

    var pas = document.getElementById('passo')
    var passo = Number(pas.value)

    // console.log(`${fim}`)  testando componentes

    var res = documet.getElementById(`res`)

    if(passo == 0){
        window.alert('Passo inválido vamos usar 1')
        passo = 1
    }

    do{
        res.innerHTML = (`Contando. . .`)
        res.innerHTML += (`${inicio}  ->emogi<-`)
        inicio = inicio + passo 
    } while(incio <= fim )

    res.innerHTML += (`->bandeira de final<-`)

    .

}
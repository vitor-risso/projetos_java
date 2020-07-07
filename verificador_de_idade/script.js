function verify(){

    var data = new Date()
    var ano_atual = data.getFullYear() // ano atual para validação de dados
    var tipo = document.getElementById(`txtano`)
    var ano = Number(tipo.value)           //conversão string ~ number
    var res = document.getElementById(`res`)

    console.log( `${ano_atual}`)
    console.log(' ola' )

    if(ano === 0 || ano > ano_atual){
        window.alert(`[ERRO]  Verifique os dados e tente novamente`)
    } else{
        var fsex = document.getElementsByName(`radsex`) // [1] ou [0] 0 homem 1 mulher; NOe tem q ser igual senão o sistema deixa maracar os dois e não deixa desmaracar
        let idade = (ano_atual - ano)
      //\z res.innerHTML = `Idade calculada é de ${idade} anos`

        var img = document.createElement('img')  // criando o lugar foto
        img.setAttribute('id', 'foto')




        var genero = ''
        
        if(fsex[0].checked){
            genero = 'Homem'

            switch(idade){
                case (idade <= 10): 
                      // crianca 
                      img.setAttribute('src', 'crianaH.png')
                      break; 
               
                case idade <= 18:
                    //adolescente 
                    img.setAttribute('src', 'adolescenteH.png')
                    break;
               
               case idade <= 60:
                    //adulto 
                    img.setAttribute('src', 'adultoH.png')
                    break;
               
               default:
                    //idoso 
                    img.setAttribute('src' , 'idoso.png')
                     break;
               }
            
            



        }  else if(fsex[1].checked){
            genero='Mulher'

            if(idade<=10){
                //crianca
                img.setAttribute('srx', 'criancaM.png')

            }else if(idade<=18){
                //adolescente
                img.setAttribute('src', 'adolescenteM.png')

            } else if(idade <=60){
                //adulto 
                img.setAttribute('src', 'adultoM.png')

            }else{
                //idosa
                img.setAttribute('src', 'idosa.png')
            }



        } 
       

       
        
        res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos`
        res.appendChild(img)  //adicionar elemento no caso a foto 

        console.log(img)
        
       console.log(genero)
    }
}    
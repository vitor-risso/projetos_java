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
        res.innerHTML = `Idade calculada é de ${idade} anos`

        var genero = ''
        
        if(fsex[0].checked){
            genero = 'Homem'

            if(idade<=10){
                //crianca
                img.setAttribute('src', 'crianaH.png')
            } else if(idade <= 18){
                //adolescente
                img.setAttribute('src', 'adolescenteH.png')
            } else if(idade<=60){
                     //adulto 
                img.setAttribute('src', 'adultoH.png')
            } else {
                //idoso
                img.setAttribute('src' , 'idoso.png')
            }
            
            



        }  else if(fsex[1].checked){
            genero='Mulher'

            if(idade<=10){
                //crianca

            }else if(idade<=18){
                //adolescente

            } else if(idade <=60){
                //adulto 

            }else{
                //idoso
            }



        } 
       

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
     /*   if(genero == 'Mulher'){
                         
           
     /  } else if(genero == 'Homem'){

            if(idade<=10){
                //crianca
                img.setAttribute('src', 'crianaH.png')

            }else if(idade<=18){
                //adolescente

            } else if(idade <=60){
                //adulto 

            }else{
                //idoso
            }
        }
 */       
        res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos`
        res.appendChild(img)  //adicionar elemento
        
       
    }
}    
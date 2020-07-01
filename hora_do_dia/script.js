function carregar (){
  var msg = document.getElementById('msg')
  var img = document.getElementById( 'img')  
  var data = new Date()
  var hora = data.getHours ()

  msg.innerHTML = `Agora são ${hora} horas <br\>`

  if (hora >= 00 && hora < 12){
      //bom dia 
      msg.innerHTML += `Bom Dia`
      img.src = `./img/manha1.png`
      document.body.style.background= `#e2cd9f`
      document.body.style.alignContent= `center`
  } else if(hora < 18){
      //Boa Tarde
      msg.innerHTML += `Boa Tarde`
      img.src = `./img/tarde1.png`
      document.body.style.background =`#b9846f`
  } else {
      //boa noite
      msg.innerHTML += `Boa Noite`
      img.src = `./img/noite1.png`
      document.body.style.background= `#515154`
  }
}


function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 5 && hora < 12){
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#e5a055'
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#7d412e'
    }else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#022950'
    }
}
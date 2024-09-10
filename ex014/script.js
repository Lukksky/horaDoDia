function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`

if (hora > 0 && hora < 12 ) {
    msg.innerHTML = `Agora são ${hora} horas </br> Bom dia!!`
    img.src = 'amanhecer-circular.png'
    document.body.style.background = '#e2cd9f'

} else if (hora >= 12 && hora <= 18) {
    msg.innerHTML = `Agora são ${hora} horas </br> Boa tarde!!`
    img.src = 'entardecer-circular.png'
    document.body.style.background = '#b9846f'

}else {
    msg.innerHTML = `Agora são ${hora} horas </br> Boa noite!!`
    img.src = 'anoitecer-circular.png'
    document.body.style.background = '#515154'
}

}
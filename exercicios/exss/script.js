function carregar(){
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    const data = new Date()
    const dia = data.getDate()

    var hora = data.getHours()
    var body = document.getElementById('body')
    msg.innerHTML = `Agora são ${hora} Horas`
    if (hora >= 0 && hora < 12){
        body.setAttribute('style', 'background: blue;')
        img.src = 'img/manha.jpg'
    } else if (hora >= 12 && hora <= 18){
    img.src = 'img/tarde.webp'
    } else {
        img.src = 'img/noite.jpg'
    }
    alert(`${dia}`)
    if (data == 31) {
        alert('é hoje')
    } else {
        alert(`${data}`)
    }
}
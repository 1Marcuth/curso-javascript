function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano').value
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var res = document.getElementById('res')
    if (fAno == 0 || fAno > ano) {
        alert('Erro! Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fAno
        var gênero = ''
        if (fsex[0].checked ) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 11) {
                // Criança
                img.setAttribute('src', 'img/criança-m.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem-m.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulto-m.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 11) {
                // Criança
                img.setAttribute('src', 'img/criança-f.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem-f.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adulta-f.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idosa-f.jpg')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos` 
        res.appendChild(img)
        
    }
}
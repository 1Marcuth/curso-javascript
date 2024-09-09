function contar() {
    let ini = document.getElementById('txti').value
    let fim = document.getElementById('txtf').value
    let passo = document.getElementById('txtp').value
    let res = document.getElementById('res')

    if (ini.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = "<strong>Impossível Contar!</strong>"
        res.style.textAlign = "center"
        // alert('[Erro] Insira Números em Todos os Campos e Continue!')
    } else {
        res.style.textAlign = "center"
        res.innerHTML = "<strong>Contando:</strong> <br>"
        let i = Number(ini)
        let f = Number(fim)
        let p = Number(passo)
        if (p <= 0 ) {
            alert('[ERRO] Passo Inválido! O Valor do Passo será considerado como "1".' )
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
         for (let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449} `
        }
        } else {
            // Contagem Recressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}
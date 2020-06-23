const receitas = document.querySelectorAll('.img-grid')
btnEsconderIngredientes = document.querySelector('.ingredientes button')
btnEsconderPreparo= document.querySelector('.modo_preparo button')
btnEsconderInfo= document.querySelector('.informacoes_adicionais button')

for (let qtdImg = 0; qtdImg < receitas.length; qtdImg++) {
    receitas[qtdImg].addEventListener('click', () => {
        window.location.href = `/receitas/${qtdImg}`
    })
}

btnEsconderIngredientes.addEventListener('click', () => {
    document.querySelector('.ingredientes ul').classList.toggle('esconder')
    btnEsconderIngredientes.innerText == 'ESCONDER'? btnEsconderIngredientes.innerText = 'MOSTRAR' : btnEsconderIngredientes.innerText ='ESCONDER'
})

btnEsconderPreparo.addEventListener('click', () => {
    document.querySelector('.modo_preparo ul').classList.toggle('esconder')
    btnEsconderPreparo.innerText == 'ESCONDER'? btnEsconderPreparo.innerText = 'MOSTRAR' : btnEsconderPreparo.innerText ='ESCONDER'
})

btnEsconderInfo.addEventListener('click', () => {
    document.querySelector('.informacoes_adicionais p').classList.toggle('esconder')
    btnEsconderInfo.innerText == 'ESCONDER'? btnEsconderInfo.innerText = 'MOSTRAR' : btnEsconderInfo.innerText ='ESCONDER'
})


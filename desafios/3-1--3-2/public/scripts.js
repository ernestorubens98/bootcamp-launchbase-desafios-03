// const modalOverlay = document.querySelector('.modal-overlay');
const cursos = document.querySelectorAll('.curso');
// const buttonClose = document.querySelector('.close-modal')

for (let curso of cursos) {
    curso.addEventListener('click', () => {
        // modalOverlay.classList.add('active')

        const videoId = curso.getAttribute('id')
        window.location.href = `/courses/${videoId}`

        // modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${videoId}`
    })
}

// buttonClose.addEventListener('click', () => {
//     modalOverlay.classList.remove('active')

//     modalOverlay.querySelector('iframe').src = '';
// })

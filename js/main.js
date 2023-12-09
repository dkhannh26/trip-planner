var change_mode = document.querySelector('.change-mode')
change_mode.addEventListener('click', () => {
    var theme = document.body.getAttribute('data-bs-theme')
    if(theme == 'light') {
        document.body.setAttribute('data-bs-theme', 'dark')
    } else {
        document.body.setAttribute('data-bs-theme', 'light')

    }
})
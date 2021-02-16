const wrapAlert = document.querySelector(".wrap-alert")

const sendAlert = (type, content) => {
    wrapAlert.innerHTML = ''

    const div = document.createElement('div')
    const button = document.createElement('button')

    
    div.innerHTML = content
    div.setAttribute('role', 'alert')
    div.classList.add('alert', `alert-${type}`, 'alert-dismissible', 'fade', 'show')

    button.classList.add('close')
    button.setAttribute('aria-label', 'Close')
    button.setAttribute('type', 'button')
    button.innerHTML = '<span aria-hidden="true">&times;</span>'
    button.addEventListener('click', () => { div.remove() })
    
    div.appendChild(button)

    wrapAlert.appendChild(div)
}

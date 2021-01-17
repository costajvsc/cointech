const factoryOption = (value, text, element) => {
    const option = document.createElement('option')
    option.value = value
    option.text = text
    
    element.appendChild(option)
}
const colors = {
    p: '#3B0B17',
    div: '#FC33FF',
    span: '#FFD433',
    section: '#FF3333',
    ul: '#FF4000', ol: '#800080', header: '#FA8072', nav: '#f67809', main: '#FFA07A', footer: '#C0C0C0',
    form: '#0AF3E9',
    body: '#800000',
    padrao: '#00FF00',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }


}
document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()
    elemento.style.borderColor = colors.get(tagName)
    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})
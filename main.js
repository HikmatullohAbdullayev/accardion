const accardions = document.querySelectorAll('.accardion_item')

accardions.forEach(item => {
    item.addEventListener('click', e =>{
        item.classList.toggle("active")
    })
})

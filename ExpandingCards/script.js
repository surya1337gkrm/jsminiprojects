const panels = document.querySelectorAll('.panel');

const removeactiveClasses =()=>{
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}

panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeactiveClasses()
        panel.classList.add('active')
    })
})


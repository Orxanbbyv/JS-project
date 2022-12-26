const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('click',()=>{
        activeremove()
        panel.classList.add('active')
    })
});

function  activeremove(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    }) 
}
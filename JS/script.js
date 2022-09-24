const trigger = document.querySelector('.material-icons-outlined')
trigger.addEventListener('click', ()=>{
    const menu = document.querySelector('.iconNavigation');
    menu.style.display = 'flex';

})

const trigger2 = document.querySelectorAll('.iconNavigationItem')
trigger2.forEach((item)=>{
    item.addEventListener('click', ()=>{
        const menu = document.querySelector('.iconNavigation');
        menu.style.display = 'none';
    })
})
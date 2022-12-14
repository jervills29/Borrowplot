AOS.init();

const sections = document.querySelectorAll("section");
const navlink = document.querySelectorAll(".nav-item");

window.addEventListener('scroll', ()=>{
    let current ='';

    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY >= (sectionTop)-sectionHeight / 3){
            current=section.getAttribute('id');
        }
        
    })
    navlink.forEach(li =>{
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    })
})

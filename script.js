const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');

if(menuBtn&&nav){
  menuBtn.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',open?'true':'false');
  });

  nav.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click',()=>{
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded','false');
    });
  });
}

const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
const theme=document.querySelector('.theme-toggle');

if(menu&&nav){
  menu.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menu.setAttribute('aria-expanded',open?'true':'false');
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}

if(theme){
  const saved=localStorage.getItem('rajib-theme');
  if(saved==='dark') document.body.classList.add('dark');
  theme.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    localStorage.setItem('rajib-theme',document.body.classList.contains('dark')?'dark':'light');
  });
}

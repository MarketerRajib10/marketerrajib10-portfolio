const header = document.querySelector('.site-header');
const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const glow = document.getElementById('cursorGlow');

window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20));
menuBtn.addEventListener('click',()=>{
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const io = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('visible'); io.unobserve(entry.target); }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

document.addEventListener('pointermove',e=>{
  if(!glow) return;
  glow.style.left=e.clientX+'px'; glow.style.top=e.clientY+'px';
});

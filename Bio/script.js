const toggle=document.querySelector('.menu-button');
const mobileMenu=document.querySelector('#mobile-menu');
function closeMenu(){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menu');mobileMenu.hidden=true;}
toggle.addEventListener('click',()=>{const opening=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(opening));toggle.setAttribute('aria-label',opening?'Fechar menu':'Abrir menu');mobileMenu.hidden=!opening;});
mobileMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
document.addEventListener('click',event=>{if(!toggle.contains(event.target)&&!mobileMenu.contains(event.target))closeMenu();});
window.matchMedia('(min-width:761px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
document.querySelector('#year').textContent=new Date().getFullYear();

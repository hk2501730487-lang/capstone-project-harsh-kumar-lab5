document.getElementById('navToggle')?.addEventListener('click', ()=> {
  const nav = document.querySelector('.main-nav');
  if(!nav) return;
  nav.style.display = (nav.style.display === 'block') ? '' : 'block';
});
document.getElementById('year').textContent = new Date().getFullYear();
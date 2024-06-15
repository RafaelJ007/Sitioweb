document.getElementById('toggleMenu').addEventListener('click', function() {
  document.getElementById('menu').style.transform =
    document.getElementById('menu').style.transform === 'translateX(-250px)' ? 'translateX(0)' : 'translateX(-250px)';
});

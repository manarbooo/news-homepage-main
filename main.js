const toggleMenu = document.querySelector('.menuToggle');
const removeMenu = document.querySelector('.removeIcon');
const navContainer = document.querySelector('.navContainer');


window.addEventListener('load', () => {
  if (window.innerWidth > 900) {
    navContainer.style.visibility = 'visible';
    navContainer.style.transform = 'translateX(0%)';
    removeMenu.style.opacity = '0';
  } else {
    navContainer.style.visibility = 'hidden';
    navContainer.style.transform = 'translateX(100%)';
    removeMenu.style.opacity = '0';
  }
});


toggleMenu.addEventListener('click', () => {
  anime({
    targets: '.navContainer',
    translateX: ['100%', '0%'], 
    duration: 500,
    easing: 'easeOutQuad',
    begin: () => {
      navContainer.style.visibility = 'visible'; 
    },
  });

  anime({
    targets: '.removeIcon',
    opacity: [0, 1], 
    duration: 500,
    easing: 'linear',
  });
});


removeMenu.addEventListener('click', () => {
  anime({
    targets: '.navContainer',
    translateX: ['0%', '100%'], 
    duration: 500,
    easing: 'easeInQuad',
    complete: () => {
      navContainer.style.visibility = 'hidden'; 
    },
  });

  anime({
    targets: '.removeIcon',
    opacity: [1, 0], 
    duration: 500,
    easing: 'linear',
  });
});


window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    
    navContainer.style.visibility = 'visible';
    navContainer.style.transform = 'translateX(0%)';
    removeMenu.style.opacity = '0';
  } else {
   
    navContainer.style.visibility = 'hidden';
    navContainer.style.transform = 'translateX(100%)';
    removeMenu.style.opacity = '0';
  }
});

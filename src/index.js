import renderingHome from './pages/home.js';
import renderingAboutUs from './pages/aboutUs.js';
import renderingContactUs from './pages/contactUs.js';

const content = document.getElementById('product-container');

renderingHome();

document.addEventListener('click',e=>{
  switch(e.target.id){
    case 'home':
      content.textContent = ''
      renderingHome();
      break;
    case 'about-us':
      renderingAboutUs();
      break;
      case 'contact-us':
        renderingContactUs();
      break;
  }
});


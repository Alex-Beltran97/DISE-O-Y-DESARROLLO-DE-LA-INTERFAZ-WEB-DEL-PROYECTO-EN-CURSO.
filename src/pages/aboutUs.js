const aboutUsTemplate = document.getElementById('aboutUs-template').content;
const containerPage = document.getElementById('product-container');
const fragment = new DocumentFragment();

const renderingAboutUs =  ()=>{
  containerPage.textContent = '';
  
  const clone = aboutUsTemplate.cloneNode(true);

  fragment.appendChild(clone);
  containerPage.appendChild(fragment);
};

export default renderingAboutUs;


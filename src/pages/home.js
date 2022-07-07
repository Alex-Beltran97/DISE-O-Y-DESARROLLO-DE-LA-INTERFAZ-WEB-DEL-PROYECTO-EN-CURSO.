const productTemplate = document.getElementById('products-template').content;
const fragment = document.createDocumentFragment();
const productContainer = document.getElementById('product-container');
const content = document.getElementById('content');
import products from '../Data/products.js';

let pagination = 0;

export const renderingHome = ()=>{
  productContainer.textContent = '';
  const clone = productTemplate.cloneNode(true);

  clone.getElementById('product-img').setAttribute('src',products[pagination].image);
  clone.getElementById('type-product').textContent = products[pagination].typeProduct;
  clone.getElementById('product-brand').textContent = products[pagination].brand;
  clone.getElementById('product-name').textContent = products[pagination].nameProduct;

  const listContainer = document.createElement('ul');
  clone.getElementById('product-description').textContent = '';
  products[pagination].characteristics.forEach(item=>{
    const listElement = document.createElement('li');
    const text = document.createTextNode(item);
    listElement.appendChild(text);
    listContainer.appendChild(listElement);
  });

  clone.getElementById('product-description').appendChild(listContainer);
  clone.getElementById('product-price').textContent = products[pagination].price;
  
  fragment.appendChild(clone);
  productContainer.appendChild(fragment);
};

const goingBack = ()=>{
  if(pagination===0){
    pagination=3;
  }else{
    --pagination;
  }
  renderingHome();
};

const goingForward = ()=>{
  if(pagination===3){
    pagination=0;
  }else{
    ++pagination;
  }
  renderingHome();
};

document.addEventListener('click',e=>{
  switch(e.target.id){
    case 'backward-btn':
      goingBack();
      break;
    case 'forward-btn':
      goingForward();
      break;
  };
});

export default renderingHome;

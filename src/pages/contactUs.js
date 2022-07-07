const container = document.getElementById('product-container');
const fragment = new DocumentFragment();
const contacUsTemplate = document.getElementById('contactUs-template').content;

function handleSubmit(e){
  e.preventDefault();

  const $btnMailTo = document.getElementById('sendAnEmail');

  const form = new FormData(this);

  if(!form.get('name').trim()||!form.get('email')||!form.get('comment').trim()){
    alert('No puedes dejar campos en blanco')
  }else{
    $btnMailTo.setAttribute('href',
    `mailto:raffriff097@gmail.com?subject=${form.get('name')} - ${form.get('email')}&body=${form.get('comment')}&`);
    
    $btnMailTo.click(); 
    
    this.reset();
  };
};

const renderingContactUs = ()=>{
  container.textContent = '';
  const clone = contacUsTemplate.cloneNode(true);
  const form = clone.getElementById('form-contact');
  form.addEventListener('submit',handleSubmit);
  fragment.appendChild(clone);  
  container.appendChild(fragment);
};  



export default renderingContactUs;
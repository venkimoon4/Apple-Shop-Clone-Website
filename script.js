let buttonElement=document.querySelector('.search-icon');

let iconElement=document.querySelector('i');



let clicked=false;

buttonElement.addEventListener('click',(event)=>{
  

  if(event.target.tagName !=='INPUT'){

    if(clicked===false){
    buttonElement.innerHTML+=`<input class="input-search-bar" placeholder="search here">`;
    clicked=true;
  }
  else {
   buttonElement.innerHTML='<i class="fa-solid fa-magnifying-glass"></i>';
   clicked=false;
  }
  
  console.log(clicked)

}
})
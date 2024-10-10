let searchForm = document.querySelector('.search-forms');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');   
}


let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
   shoppingcart.classList.toggle('active');   
}

let loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');   
}
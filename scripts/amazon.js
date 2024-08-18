import{products} from '../data/products.js'

import{addToCart} from '../data/cart.js';
let productsHTML='';
import { formatCurrency } from './utils/money.js';


products.forEach((products)=>{
  productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="image-product"
             src="${products.image}">

    
          </div>
          
          <div class="product-name  limit-text-to-2-lines">
             ${products.name}
          </div>
    
            
          <div class="product-rating-container">
              <img class="rating-star"
                 src="rating/rating-${products.rating.stars*10}.png">


              <div class="count-review link-primary">
                ${products.rating.count}
              </div>
    
          </div>
          <div class="product-price">
            $${formatCurrency(products.priceCents )}
  
          </div>
          
          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            
          </div>

          
          <div class="product-spacer"></div>
          <div class="added-to-cart js-added-to-cart-${products.id}">
            <img class="added-to-cart-img" src="images/checkmark.png">
            Added
          </div>
          
          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${products.id}">
            
            Add to Cart
          
          </button>
        </div>`;

});


document.querySelector('.js-product-grid').
innerHTML = productsHTML;




function updateCartQuantity(){
  let totalQuantity=0;

  cart.forEach((cartItem)=>{
    totalQuantity+=cartItem.quantity;
  });

  
  
  document.querySelector('.js-quantity-no').innerHTML=totalQuantity;

  const addMessage = document.querySelector(`.js-added-to-cart-${productsId}`

  );

}


document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addToCart(productId);
      updateCartQuantity();
     
     
      addMessage.classList.add('added-to-cart-visible');
      




      
      
      

     
      
  });
});


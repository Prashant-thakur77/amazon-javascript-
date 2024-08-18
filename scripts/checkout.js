import{cart,removeFromCart} from '../data/cart.js';
import{products} from '../data/products.js';
import { formatCurrency } from './utils/money.js';
let cartSummaryHTML='';


cart.forEach((cartItem) =>{
  const productId= cartItem.productId;

  let matchingProduct;

  products.forEach((product)=> {
    if(product.id===productId){
      matchingProduct=product;
    }

  });
  cartSummaryHTML +=
  `<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: Friday, August 23
      </div>
      <div class="cart-item-details-grid">
        <img class="product-image" src="${matchingProduct.image}">
        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            ${formatCurrency(matchingProduct.priceCents)}

          </div>
          <div class="product-quantity">
            <span>
              Quantity:<span class="quantity-no">
                ${cartItem.quantity}
              </span>
            </span>
            <span class="update-button">
              Update

            </span>
            <span class="delete-button js-delete-link" data-product-id="${matchingProduct.id}">
              Delete
            </span>

          </div>
        </div>



        <div class="delivery-options">
          <div class="choose-option-title">
            Choose a delivery option:
          </div>
          <div class="choose-a-delivery-option">
            <input type="radio" checked class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Friday, August 23
                
              </div>
              <div class="delivery-option-price">FREE Shipping
                
              </div>


            </div>
            

            
            
          </div>

          <div class="choose-a-delivery-option">
            <input type="radio" checked class="delivery-option-input" name="delivery-option-${matchingProduct.id}">

            <div>
              <div class="delivery-option-date">
                Friday, August 23
                
              </div>
              <div class="delivery-option-price">FREE Shipping
                
              </div>


            </div>

            
            
          </div>

          <div class="choose-a-delivery-option">
            <input type="radio" checked class="delivery-option-input" name="delivery-option-${matchingProduct.id}">

            <div>
              <div class="delivery-option-date">
                Friday, August 23
                
              </div>
              <div class="delivery-option-price">FREE Shipping
                
              </div>


            </div>
            
            
          </div>
          
        </div>
      </div>
    </div>
    `;

});
document.querySelector('.js-order-summary').innerHTML=cartSummaryHTML;

document.querySelectorAll('.js-delete-link')
  .forEach((link)=> {
    link.addEventListener('click',()=>{
      const productId = link.dataset.productId;
      removeFromCart(productId);
      const container=document.querySelector(`.js-cart-item-container-${productId}`);
      container.remove();
      

    });
  });




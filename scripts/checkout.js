import{cart} from '../data/cart.js';
import{products} from '../data/products.js';
let cartSummaryHTML;


cart.forEach((cartItem) =>{
  const productId= cartItem.productId;

  let matchingProduct;

  products.forEach((product)=> {
    if(product.id===productId){
      matchingProduct=product;
    }

  });
  cartSummaryHTML +=
  `<div class="cart-item-container">
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
            ${matchingProduct.priceCents/100}

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
            <span class="delete-button">
              Delete
            </span>

          </div>
        </div>



        <div class="delivery-options">
          <div class="choose-option-title">
            Choose a delivery option:
          </div>
          <div class="choose-a-delivery-option">
            <input type="radio" checked class="delivery-option-input" name="delivery-option-1">
            <div>
              <div class="delivery-option-date">
                Friday, August 23
                
              </div>
              <div class="delivery-option-price">FREE Shipping
                
              </div>


            </div>
            

            
            
          </div>

          <div class="choose-a-delivery-option">
            <input type="radio" checked class="delivery-option-input" name="delivery-option-1">

            <div>
              <div class="delivery-option-date">
                Friday, August 23
                
              </div>
              <div class="delivery-option-price">FREE Shipping
                
              </div>


            </div>

            
            
          </div>

          <div class="choose-a-delivery-option">
            <input type="radio" checked class="delivery-option-input" name="delivery-option-1">

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


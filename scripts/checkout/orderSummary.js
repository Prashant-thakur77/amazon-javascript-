import{cart,
  removeFromCart,
  addToCart,
  updateDeliveryOptions
} from '../../data/cart.js';
import{products,getProduct, loadProducts} from '../../data/products.js';
import {formatCurrency } from '../utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import{deliveryOptions, getdeliveryOption}from '../../data/delivery-option.js'
import {renderPaymentSummary} from './paymentSummary.js';




export function renderOrderSummary(){



  let cartSummaryHTML='';

  cart.forEach((cartItem) =>{
    
    const productId= cartItem.productId;
    
  
    
   

    const matchingProduct=getProduct(productId);
    if(matchingProduct!==undefined){
      const deliveryOptionId = cartItem.deliveryOptionId;
    const deliveryOption =getdeliveryOption(deliveryOptionId);
    const today=dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDay,'days');
    const dateString = deliveryDate.format('dddd, MMMM D');







    cartSummaryHTML +=
    `<div class="cart-item-container js-cart-item-container js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: ${dateString}
        </div>
        <div class="cart-item-details-grid">
          <img class="product-image" src="${matchingProduct.image}">
          <div class="cart-item-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-price">
              ${matchingProduct.getPrice()}

            </div>
            <div class="product-quantity">
              <span class="quantity-label">
                Quantity:<span class="quantity-no">
                  ${cartItem.quantity}
                </span>
              </span>
              <span class="update-button js-update-link " data-product-id="${matchingProduct.id}">
                Update
                

              </span>
              <input class="quantity-input js-quantity-input-"${matchingProduct.id}">
              <span class="save-quantity-link link-primary js-save-link " data-product-id="${matchingProduct.id}">Save</span>
            
              <span class="delete-button js-delete-link " data-product-id="${matchingProduct.id}">
                Delete
              </span>

            </div>
          </div>



          <div class="delivery-options">
            <div class="choose-option-title">
              Choose a delivery option:
            </div>
            ${deliveryOptionsHTML(matchingProduct,cartItem)}
          
            
          </div>
        </div>
      </div>
      `;


    }
    
    
    

  });



  function deliveryOptionsHTML(matchingProduct,cartItem){

    let html='';
    deliveryOptions.forEach((deliveryOption)=>{
      const today=dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDay,'days');
      const dateString = deliveryDate.format('dddd, MMMM D');

      const priceString = deliveryOption.priceCents===0?'FREE':`${formatCurrency(deliveryOption.priceCents)}`


      const isChecked = deliveryOption.id===cartItem.deliveryOptionId;

      html+=
      `<div class="choose-a-delivery-option js-delivery-option"
      data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOption.id}">
          <input type="radio" ${isChecked?'checked':''} class="delivery-option-input" name="delivery-option-${matchingProduct.id}">

          <div>
            <div class="delivery-option-date">
              ${dateString}
              
            </div>
            <div class="delivery-option-price">
            ${priceString} Shipping
              
            </div>


          </div>
          
          
        </div>`

    });
    return html;

  }

  
  const orderSummaryElement = document.querySelector('.js-order-summary');
  if (orderSummaryElement) {
    orderSummaryElement.innerHTML = cartSummaryHTML;
  } else {
    console.error("Element '.js-order-summary' not found.");
  }

  
 

  document.querySelectorAll('.js-delete-link')
    .forEach((link)=> {
      link.addEventListener('click',()=>{
        const productId = link.dataset.productId;
        removeFromCart(productId);
        const container=document.querySelector(`.js-cart-item-container-${productId}`);
        container.remove();
        renderPaymentSummary(); 
        

      });
    });

    document.querySelectorAll('.js-update-link')
    .forEach((link)=> {
      link.addEventListener('click',()=>{
        const productId = link.dataset.productId;
        const container = document.querySelector(
          `.js-cart-item-container-${productId}`
        );
        container.classList.add('is-editing-quantity');
        
        
        

      
      });
    });  
  document.querySelectorAll('.js-save-link')
    .forEach((link)=>{
      link.addEventListener('click',()=>{
        const productId=link.dataset.productId;
        const container=document.querySelector(`.js-cart-item-container-${productId}`

        );
        container.classList.remove('is-editing-quantity');
        

      });
    });

  document.querySelectorAll('.js-delivery-option')
    .forEach((Element)=>{
      Element.addEventListener('click',()=>{
        const{deliveryOptionId,productId}=Element.dataset;
        updateDeliveryOptions(deliveryOptionId,productId);
        renderOrderSummary();
        renderPaymentSummary();
      });
    });
}
renderOrderSummary();


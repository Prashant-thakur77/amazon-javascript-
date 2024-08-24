import { cart } from "../../data/cart.js";
import { getProduct, loadProducts } from "../../data/products.js";
import { deliveryOptions, getdeliveryOption } from "../../data/delivery-option.js";
import {formatCurrency } from '../utils/money.js';

import { addOrder } from "../../data/order.js";

export function renderPaymentSummary(){
  let productPriceCents=0;
  let shippingPriceCents=0;
  cart.forEach((cartItem)=>{
   const product= getProduct(cartItem.productId);
   productPriceCents+= product.priceCents * cartItem.quantity;


   const deliveryOption=getdeliveryOption(cartItem.deliveryOptionId);
   shippingPriceCents+=deliveryOption.priceCents;



   
  });
  const totalBeforeTaxCents=productPriceCents+shippingPriceCents;
  const taxCents = totalBeforeTaxCents*0.1;
  const totalcents=totalBeforeTaxCents+taxCents;

  const html=`
   <div class="payment-detail-title">
      Order Summary
    </div>
    <div class="payment-summary-row">
      <div>Items(5):</div>
      <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>

    </div>


    <div class="payment-summary-row">
      <div>
        Shipping & handling:
      </div>
      <div class="payment-summary-money">
        $${formatCurrency(shippingPriceCents)}


      </div>
    </div>
    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money before-tax-price">
        $${formatCurrency(totalBeforeTaxCents)}
      </div>
    </div>
    <div class="payment-summary-row">
      <div>Estimated tax(10%):</div>
      <div class="payment-summary-money" >
        $${formatCurrency(taxCents)}
      </div>
    </div>
    <div class="payment-summary-row order-total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">
        $${formatCurrency(totalcents)}
      </div>
    </div>
    <button class="place-order-button js-place-order">
      Place your order
    </button>  `;

    
   document.querySelector('.js-payment-summary')
    .innerHTML = html;

   document.querySelector('.js-place-order')
    .addEventListener('click',async ()=>{
      try{
        const response=await fetch('https://supersimplebackend.dev/orders',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            cart: cart
  
          })
        });
        const order=await response.json();
        addOrder(order);

      }catch(error){
        console.log('Unexpected Error try again later')

      }
      window.location.href='orders.html';
     

    }) ;
    

      
  

  

}
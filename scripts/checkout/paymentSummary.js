import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { deliveryOptions, getdeliveryOption } from "../../data/delivery-option.js";
import {formatCurrency } from '../utils/money.js';

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
    <button class="place-order-button">
      Place your order
    </button>  `;

    
    const paymentSummaryElement = document.querySelector('.js-payment-summary');
    if (paymentSummaryElement) {
      paymentSummaryElement.innerHTML = html;
    } else {
      console.error("Element '.js-payment-summary' not found.");
    }

      
  

  

}
import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { deliveryOptions, getdeliveryOption } from "../../data/delivery-option.js";

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
  

  

}
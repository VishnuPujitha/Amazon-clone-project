import {renderOrderSummary} from'../../scripts/checkout/orderSummary.js';
import {loadFromStorage,cart} from'../../data/cart.js';
describe('test suite :renderOrderSummary',()=>{
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
            const productId2='15b6fc6f-327a-4ec4-896f-486349e85a3d';
  //beforeEach share code btw tests and remove duplication
  beforeEach(()=>{
    spyOn(localStorage,'setItem');
            document.querySelector('.js-test-container').innerHTML =`<div class="js-order-summary"></div>`;
            const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
            const productId2='15b6fc6f-327a-4ec4-896f-486349e85a3d';
            spyOn(localStorage,'getItem').and.callFake(()=>{
              return JSON.stringify([{productId:productId1,
                quantity:2,//saving the data for checkout js
                deliveryOptionId:'1'
               },{
                productId:productId2,
                quantity:1,
                deliveryOptionId:'2'}]);
        
            });
            loadFromStorage();
            renderOrderSumamry();

  });
  it('displays the cart ',()=>{
    
    expect(
      document.querySelectorAll('.js-cart-item-container').length).toEqual(2);
      expect(
        document.querySelector(`.js-product-quantity-${productId1}`).innerText).toContain('Quantity:2');
        expect(
          document.querySelector(`.js-product-quantity-${productId2}`).innerText).toContain('Quantity:1');
          document.querySelector('.js-test-cotainer').innerHTML='';
        });
          it('removes a product',()=>{
            
            document.querySelector(`.js-delete-link-${productId1}`).click();
            expect(
              document.querySelectorAll('.js-cart-item-container').length).toEqual(1);
              expect(
                document.querySelectorAll(`.js-cart-item-container'-${productId1}`)).toEqual(null);
                expect(
                  document.querySelectorAll(`.js-cart-item-container'-${productId2}`)).not.toEqual(null);
                  except(cart.length).toEqual(1);
                  except(cart[0].productId).toEqual(productId2);
                  document.querySelector('.js-test-cotainer').innerHTML='';
                

          });
      


  });




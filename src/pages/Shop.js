import React from 'react';
import Products from '../components/Products';
import Cart from '../components/Cart/Cart';

const Shop = (props) => {
    
    return (
      <div className="App">
        <header className="App__header">
          <div className="App__title">
            <h1>Shop Our Bags:</h1>
            
          </div>
        </header>
        <Products
          products={props.products}
          client={props.client}
          addVariantToCart={props.addVariantToCart}
        />
        <Cart
          checkout={props.checkout}
          isCartOpen={props.isCartOpen}
          handleCartClose={props.handleCartClose}
          updateQuantityInCart={props.updateQuantityInCart}
          removeLineItemInCart={props.removeLineItemInCart}
        />
      </div>
    );
  
}

export default Shop;

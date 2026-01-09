 import '../styles/CartShop.css';

 import { useState } from 'react';
 
 function CartShop({cart, updateCart}) {
                const [isCartOpen, setIsCartOpen] = useState(false);

                return isCartOpen ? (                
                    <div className="tfs-cart-shop">
                        <button className="tfs-cart-open-button" onClick={() => setIsCartOpen(false)}>Close Cart</button>
                        <h2>Shopping Cart</h2>
                        {cart.map(({name, price, amount}, index) => (
                            <div key={`${name}-${index}`} className="tfs-cart-item">
                                <span>{name}</span>
                                <span>{price}$</span>
                                <span> X {amount}</span>
                            </div>
                        ))}
                        <br />
                        <div>
                            Total items: {cart.reduce((acc, plantInCart) => acc + plantInCart.price * plantInCart.amount, 0)}$
                        </div>
                        <button onClick={() => updateCart(0)}>Reset cart shop</button>
                    </div>
                ) :
                (
                    <div className='tfs-cart-closed'>
                        <button className="tfs-cart-open-button" onClick={() => setIsCartOpen(true)}>Open Cart</button>
                    </div>
                );
}

export default CartShop;
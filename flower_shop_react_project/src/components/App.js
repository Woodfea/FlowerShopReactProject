import '../styles/App.css';
import Banner from './Banner';
import CartShop from './CartShop';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import { useState } from 'react';

function App() {
    const [cart, updateCart] = useState([])
    return (
        <div>
            <Banner />
            <div className='tfs-layout-inner'>
				<CartShop cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
            <Footer />
        </div>
    );
}

export default App;

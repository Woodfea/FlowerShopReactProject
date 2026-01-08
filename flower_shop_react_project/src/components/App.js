import '../styles/App.css';
import Banner from './Banner';
/*import CartShop from './CartShop';*/
import ShoppingList from './ShoppingList';
import Footer from './Footer';

function App() {
    return (
        <div>
            <Banner />
            <ShoppingList />
            <Footer />
            {/*<CartShop />*/}
        </div>
    );
}

export default App;

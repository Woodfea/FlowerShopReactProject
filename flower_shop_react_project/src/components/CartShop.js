 function CartShop(){
                const items = {"Roses": 8, "Tulips" : 10, "Daisies" : 15};
                const totalItems = Object.values(items).reduce((a, b) => a + b, 0);
                const CardTitle = "Shopping Cart";
                return (
                    <div>
                        <h2>{CardTitle}</h2>
                        <ul>
                            {Object.entries(items).map(([key, value]) => <li key={key}>{key} : {value}$</li>)}
                        </ul>
                        <div>
                            Total items: {totalItems}$
                        </div>
                    </div>
                );
}

export default CartShop;
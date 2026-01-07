import { plantList } from "../datas/plantList";
import '../styles/ShoppingList.css';

function ShoppingList() {
    // const categories = plantList.reduce((acc, plant) => {
    //     if (!acc.includes(plant.category)) {
    //         acc.push(plant.category);
    //     }
    //     return acc;
    // }, []);
    const categories = [...new Set(plantList.map((plant) => plant.category))];
    return (
    <div>
        <ul>
            {categories.map((category) => (
                <li key={category}>{category}</li>))}
        </ul>
        <ul>
            {plantList.map((plant) => (
                <li key={plant.id}>
                    {plant.name}
                    {plant.isBestSale && <span>🔥</span>}
                    {plant.isSpecialOffer && <span className="tfs-sales">SALE 25% OFF</span>}
                </li>))}
        </ul>
    </div>);
}

export default ShoppingList;
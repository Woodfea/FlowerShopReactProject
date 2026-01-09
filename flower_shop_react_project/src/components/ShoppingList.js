import { plantList } from "../datas/plantList";
import '../styles/ShoppingList.css';
import PlantItem from "./PlantItem";

function ShoppingList({cart, updateCart}) {
    // const categories = plantList.reduce((acc, plant) => {
    //     if (!acc.includes(plant.category)) {
    //         acc.push(plant.category);
    //     }
    //     return acc;
    // }, []);
    const categories = [...new Set(plantList.map((plant) => plant.category))];

    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name);        
        if (currentPlantSaved) {
            const cartFiltredCurrentPlant = cart.filter((plant => plant.name !==name));
            updateCart([
                ...cartFiltredCurrentPlant,
                {name, price, amount: currentPlantSaved.amount + 1}
            ]);
        } else {
            updateCart([
                ...cart,
                {name, price, amount: 1}
            ]);
        }
    }

    return (
    <div className="tfs-shopping-list">
        <ul>
            {categories.map((category) => (
                <li key={category}>{category}</li>))}
        </ul>
        <ul className="tfs-plant-list">
            {plantList.map((plant) => (
                <div>
                    <PlantItem
                        key={plant.id}
                        id={plant.id} 
                        name={plant.name}
                        cover={plant.cover}
                        water={plant.water}
                        light={plant.light}
                    />
                    <button onClick={() => addToCart(plant.name, plant.price)}>Add to cart</button>
                </div>
            ))}
        </ul>
    </div>);
}

export default ShoppingList;
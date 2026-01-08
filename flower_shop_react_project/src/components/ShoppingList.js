import { plantList } from "../datas/plantList";
import '../styles/ShoppingList.css';
import PlantItem from "./PlantItem";

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
                    <PlantItem
                        key={plant.id}
                        id={plant.id} 
                        name={plant.name}
                        cover={plant.cover}
                        water={plant.water}
                        light={plant.light}
                    />))}
        </ul>
    </div>);
}

export default ShoppingList;
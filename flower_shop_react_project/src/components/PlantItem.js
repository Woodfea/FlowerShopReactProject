import CareScale from "./CareScale";
import '../styles/PlantItem.css';

function PlantItem({ name, cover, id, light, water }) {
    return (
        <li key = { id } className="tfs-plant-item">
            <img className='tfs-plant-item-cover' src={cover} alt={`${name} cover`}></img>
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem;
import Water from '../assets/water.svg';
import Sun from '../assets/sun.svg';

function CareScale({ careType, scaleValue }) {
    const range = [1, 2, 3, 4, 5];
    let careTypeSymbol = '';
    switch (careType) {
        case 'water':
            careTypeSymbol = Sun;
            break;
        case 'light':
            careTypeSymbol = Water;
            break;
        default:
            careTypeSymbol = '?';
            break;
    }
    return (
        <div>
            {
                range.map((value) => {
                    if(scaleValue >= value) {
                        return <img key={value.toString()} src={careTypeSymbol} alt={`${careType} care scale`} />;
                    }
                    return null;
                })
            }
        </div>
    );

}

export default CareScale;
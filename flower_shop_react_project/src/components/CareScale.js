import Water from '../assets/water.svg';
import Sun from '../assets/sun.svg';

function CareScale({ careType, scaleValue }) {
    const range = [1, 2, 3];
    let careTypeSymbol = '';
    switch (careType) {
        case 'water':
            careTypeSymbol = Water;
            break;
        case 'light':
            careTypeSymbol = Sun;
            break;
        default:
            careTypeSymbol = '?';
            break;
    }
    return (
        <div onClick={() => handleClick(careType, scaleValue)}>
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


function handleClick(careType, scaleValue) {
    let careDescription = 'This plant requires ';

    if (scaleValue === 1) {
        careDescription += 'a little ';
    } else if (scaleValue === 2) {
        careDescription += 'some ';
    } else if (scaleValue >= 3) {
        careDescription += 'a lot of ';
    }

    if (careType === 'water') {
        careDescription += "water";
    } else if (careType === 'light') {
        careDescription += "light";
    }

    alert(careDescription);
}

export default CareScale;
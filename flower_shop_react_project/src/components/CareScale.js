function CareScale({ careType, scaleValue }) {
    const range = [1, 2, 3, 4, 5];
    const careTypeSymbol = careType === 'light' ? '☀️' : '💧';
    return (
        <div>
            {
                range.map((value) => {
                    if(scaleValue >= value) {
                        return <span key={value.toString()}>{careTypeSymbol}</span>;
                    }
                    return null;
                })
            }
        </div>
    );

}

export default CareScale;
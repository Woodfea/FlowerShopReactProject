import '../styles/Recommendation.css';

function Recommendation() {
    const currentMonth = new Date().getMonth();
    const isSpring = currentMonth >= 2 && currentMonth <= 5;
    // const recommandation = isSpring ? "Spring is the perfect time to plant flowers!" : "Enjoy your flowers year-round!";
    // return <p className='tfs-recommandation'>{recommandation}</p>

    if (isSpring) {
        return <p className='tfs-recommandation'>Spring is the perfect time to plant flowers!</p>;
    }
    return <p className='tfs-recommandation'>Enjoy your flowers year-round!</p>;
}

export default Recommendation;
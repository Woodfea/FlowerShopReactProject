import '../styles/Banner.css';
import logo from '../assets/logo.png';
import Reconmmendation from './Recommendation';

function Banner() {
    const title = "Welcome to the Flower Shop!";

    return <div className="tfs-banner">
        <div className="tfs-banner-row">
            <img src={logo} alt="Logo" className='tfs-logo' />
            <h1 className='tfs-title'>{title}</h1>
        </div>
       <Reconmmendation />
    </div>;
}

export default Banner;
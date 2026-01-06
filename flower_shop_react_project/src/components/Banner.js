import '../styles/Banner.css';
import logo from '../assets/logo.png';

function Banner() {
    const title = "Welcome to the Flower Shop!";
    return <div className="tfs-banner">
        <img src={logo} alt="Logo" className='tfs-logo' />
        <h1 className='tfs-title'>{title}</h1>
    </div>;
}

export default Banner;
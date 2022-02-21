import './Footer.scss'
import logo from '../Assets/Images/logo.svg';
import youtube_logo from '../Assets/Images/youtube_logo.png';

function Footer() {
    return (
        <div className="Footer">
            <div className='Footer-container'>
                <a href="https://www.therealseat.com/">
                    <img src={logo} alt="logo" />
                </a>
                <span className="Capstone-group-container">
                    <p className="Capstone-group">
                        The RealSeat Capstone:
                        Abu Abukar, Caty Battjes, Steven Johnson, Elijah Moppins, Lam Nguyen, Jose Ramos
                    </p>
                </span>
                <div className="Image-link-container">
                    <a href="https://www.youtube.com/channel/UCkocc2mzcG0fDg80vAtJgwA">
                        <img src={youtube_logo} alt="youtube_logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
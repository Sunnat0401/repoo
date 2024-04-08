import './Navbar.css'
import navbaricon from '../../assets/navbarIcon.png'
import hamburger from "../../assets/hamburger.png"
import Icons from '../../assets/Icons.png'
import youtube from '../../assets/navbarLogo.jpg'
import Search from '../../assets/Search.png'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="#" className="navbar-link">
                        <img src={hamburger} alt="icons" className="navbar-hamburger" />
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">
                        <img src={youtube} alt="youtube" className="navbar-logos" />
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">
                        <img src={Search} alt="search" className="navbar-search" />
                    </a>
                </li>
            </ul>
            <ul className="navbar-sublist">
            <li className="navbar-items">
                    <a href="#" className="navbar-link">
                        <img src={Icons} alt="" className="navbar-icons" />
                    </a>
                </li>
                <li className="navbar-items">
                    <a href="#" className="navbar-link">
                        <img src={navbaricon} alt="" className="navbar-blogers" />
                    </a>
                </li>
          
            </ul>
        </div>
    </div>
  )
}

export default Navbar
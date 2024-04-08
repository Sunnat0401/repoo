import logo from '../../assets/Favourites.png'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'
import './Favorites.css'
const Favourites = () => {
  return (
            <div className='favorite'>
        <div className="container">
            <Navbar/>
            <div className="favorite-wrapper">
              <div className="favorite-saidbar">
              <SideBar/>
              </div>
            <div className="favorite-products">
                      <div className="favorite-videos">
              <img className='favorite-user' src={logo} alt="user" />
                      <div className="favorite-video">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/XKR3SfC6DdQ?si=zBW3aQ1HGKk7RLv3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                      </div>
                      </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Favourites
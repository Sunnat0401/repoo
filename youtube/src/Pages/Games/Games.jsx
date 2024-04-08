import logo from '../../assets/Games.png'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'
import './Games.css'
const Games = () => {
  return (
            <div className='game'>
        <div className="container">
            <Navbar/>
            <div className="game-wrapper">
              <div className="game-saidbar">
              <SideBar/>
            <div className="game-products">
                      <div className="game-videos">
              <img className='game-user' src={logo} alt="user" />
                      <div className="game-video">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/Id4oO3jKovU?si=VeisdmJ3BM7P53oR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                      </div>
                      </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Games
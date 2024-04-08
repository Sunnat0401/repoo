import logo from '../../assets/Music.png'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'
import './Musics.css'
const Musics = () => {
  return (
            <div className='music'>
        <div className="container">
            <Navbar/>
            <div className="music-wrapper">
              <div className="music-saidbar">
              <SideBar/>
              </div>
            <div className="music-products">
                      <div className="music-videos">
              <img className='music-user' src={logo} alt="user" />
                      <div className="music-video">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/5Ejp7yFZxPM?si=JYOyfd0HMPppFLJR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                      </div>
                      </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Musics
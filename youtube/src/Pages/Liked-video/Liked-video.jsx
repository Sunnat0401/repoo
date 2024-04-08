import logo from '../../assets/Liked videos.png'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'
import './Liked-video.css'
const LikedVideo = () => {
  return (
            <div className='like'>
        <div className="container">
            <Navbar/>
            <div className="like-wrapper">
              <div className="like-saidbar">
              <SideBar/>
              </div>
            <div className="like-products">
                      <div className="like-videos">
              <img className='like-user' src={logo} alt="user" />
                      <div className="like-video">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/M0m-r2oPh1I?si=yoyANnN6Smzfilep" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                      </div>
                      </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default LikedVideo
import logo from '../../assets/Library.png'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'
import './Library.css'
const Library = () => {
  return (
            <div className='trending'>
        <div className="container">
            <Navbar/>
            <div className="trending-wrapper">
              <div className="trending-saidbar">
              <SideBar/>
              </div>
            <div className="trending-products">
                      <div className="trending-videos">
              <img className='trending-user' src={logo} alt="user" />
                      <div className="trending-video">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/CHFif_y2TyM?si=V9xlFsCSgvkaEod_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                      </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Library
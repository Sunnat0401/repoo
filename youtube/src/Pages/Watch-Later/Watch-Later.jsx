import logo from '../../assets/Watch later.png'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'
import './Watch-Later.css'
const WiteLater = () => {
  return (
            <div className='watch'>
        <div className="container">
            <Navbar/>
            <div className="watch-wrapper">
              <div className="watch-saidbar">
              <SideBar/>
              </div>
            <div className="watch-products">
                      <div className="watch-videos">
              <img className='watch-user' src={logo} alt="user" />
                      <div className="watch-video">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/h9tnltPEwuE?si=iWmhgU8aZ5hNyfCa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                </div>
                      </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default WiteLater
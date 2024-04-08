import logo from '../../assets/History.png'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'
import './History.css'
const History = () => {
  return (
            <div className='history'>
        <div className="container">
            <Navbar/>
            <div className="history-wrapper">
              <div className="history-saidbar">
              <SideBar/>
              </div>
            <div className="history-products">
                      <div className="history-videos">
              <img className='history-user' src={logo} alt="user" />
                      <div className="history-video">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/LDECPptPMNg?si=uyS1xTv3T3EIn7M-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                      </div>
                      </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default History
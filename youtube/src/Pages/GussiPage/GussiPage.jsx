import './GussiPage.css'
import user1 from '../../assets/user1.png'
import video1 from '../../assets/Video (1).png'
import video2 from '../../assets/Video (2).png'
import video3 from '../../assets/Video (3).png'
import video4 from '../../assets/Video4.png'
import Recommend from '../../Components/Recommend/Recommend'
import Food from '../../Components/Food/Food'
import SideBar from '../../Components/SideBar/SideBar'
import Navbar from '../../Components/Navbar/Navbar'
const GussiPage = () => {
  return (
    <div className='gussipage'>
        <div className="container">
            <Navbar/>
            <div className="gussipage-wrapper">
              <div className="gussipage-saidbar">
              <SideBar/>
              </div>
            <div className="gussipage-products">
              <img className='gussipage-users' src={user1} alt="user" />
                 <div className="gussipage-cards">
                  <img src={video1} alt="" className="home-imgs" />
                  <img src={video2} alt="" className="home-imgs" />
                  <img src={video3} alt="" className="home-imgs" />
                  <img src={video4} alt="" className="home-imgs" />
                 </div>
            <Recommend/>
            <Food/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default GussiPage
import './NaraPages.css'
import user2 from '../../assets/user2.png'
import video1 from '../../assets/Video (1).png'
import video2 from '../../assets/Video (2).png'
import video3 from '../../assets/Video (3).png'
import video4 from '../../assets/Video4.png'
import Recommend from '../../Components/Recommend/Recommend'
import Food from '../../Components/Food/Food'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'
const NaraPages = () => {
  return (
    <div className='nara'>
        <div className="container">
            <Navbar/>
            <div className="nara-wrapper">
              <div className="nara-saidbar">
              <SideBar/>
              </div>
            <div className="nara-products">
              <img className='nara-users' src={user2} alt="user" />
            <Recommend/>
                 <div className="nara-cards">
                  <img src={video1} alt="" className="home-imgs" />
                  <img src={video2} alt="" className="home-imgs" />
                  <img src={video3} alt="" className="home-imgs" />
                  <img src={video4} alt="" className="home-imgs" />
                 </div>
        
            <Food/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default NaraPages
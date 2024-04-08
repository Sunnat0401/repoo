import './Belle.css'
import user3 from '../../assets/User 3.png'
import video1 from '../../assets/Video (1).png'
import video2 from '../../assets/Video (2).png'
import video3 from '../../assets/Video (3).png'
import video4 from '../../assets/Video4.png'
import SideBar from '../../Components/SideBar/SideBar'
import Recommend from '../../Components/Recommend/Recommend'
import Food from '../../Components/Food/Food'
import Navbar from '../../Components/Navbar/Navbar'
const Belle = () => {
  return (
    <div className='belle'>
        <div className="container">
            <Navbar/>
            <div className="belle-wrapper">
              <div className="belle-saidbar">
              <SideBar/>
              </div>
            <div className="belle-products">
              <img className='belle-users' src={user3} alt="user" />
            <Food/>
                 <div className="belle-cards">
                  <img src={video1} alt="videos" className="home-imgs" />
                  <img src={video2} alt="videos" className="home-imgs" />
                  <img src={video3} alt="videos" className="home-imgs" />
                  <img src={video4} alt="videos" className="home-imgs" />
                 </div>
            <Recommend/>
            </div>
            </div>
        </div>
    </div>
  )
}
export default Belle
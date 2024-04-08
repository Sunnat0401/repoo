import './Emma.css'
import user1 from '../../assets/user1.png'
import video1 from '../../assets/Cover (17).png'
import video2 from '../../assets/Cover (16).png'
import video3 from '../../assets/Cover (15).png'
import video4 from '../../assets/Cover (14).png'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'
import Recommend from '../../Components/Recommend/Recommend'
import Food from '../../Components/Food/Food'
const Emma = () => {
  return (
    <div className='emma'>
        <div className="container">
            <Navbar/>
            <div className="emma-wrapper">
              <div className="emma-saidbar">
              <SideBar/>
              </div>
            <div className="emma-products">
              <img className='emma-users' src={user1} alt="user" />
                 <div className="emma-cards">
                  <img src={video1} alt="img" className="home-imgs" />
                  <img src={video2} alt="img" className="home-imgs" />
                  <img src={video3} alt="img" className="home-imgs" />
                  <img src={video4} alt="img" className="home-imgs" />
                 </div>
            <Recommend/>
            <Food/>
            </div>
            </div>
        </div>
    </div>
  )
}
export default Emma
import './Beah.css'
import user6 from '../../assets/User 6.png'
import video1 from '../../assets/Cover (18).png'
import video2 from '../../assets/Cover (17).png'
import video3 from '../../assets/Cover (16).png'
import video4 from '../../assets/Video4.png'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'
import Recommend from '../../Components/Recommend/Recommend'
import Food from '../../Components/Food/Food'
const Beah = () => {
  return (
    <div className='beah'>
        <div className="container">
            <Navbar/>
            <div className="beah-wrapper">
              <div className="beah-saidbar">
              <SideBar/>
              </div>
            <div className="beah-products">
              <img className='beah-users' src={user6} alt="imguser" />
                 <div className="beah-cards">
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
export default Beah
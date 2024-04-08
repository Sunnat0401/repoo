import './Eunic.css'
import user4 from '../../assets/User 4.png'
import video5 from '../../assets/Cover (9).png'
import video6 from '../../assets/Cover (10).png'
import video7 from '../../assets/Cover (11).png'
import video8 from '../../assets/Cover (12).png'
import SideBar from '../../Components/SideBar/SideBar'
import Recommend from '../../Components/Recommend/Recommend'
import Food from '../../Components/Food/Food'
import Navbar from '../../Components/Navbar/Navbar'
const Eunic = () => {
  return (
    <div className='eunic'>
        <div className="container">
            <Navbar/>
            <div className="eunic-wrapper">
              <div className="eunic-saidbar">
              <SideBar/>
              </div>
            <div className="eunic-products">
              <img className='eunic-users' src={user4} alt="user" />
                 <div className="eunic-cards">
                  <img src={video5} alt="img" className="home-imgs" />
                  <img src={video6} alt="img" className="home-imgs" />
                  <img src={video7} alt="img" className="home-imgs" />
                  <img src={video8} alt="img" className="home-imgs" />
                 </div>
            <Recommend/>
            <Food/>
            </div>
            </div>
        </div>
    </div>
  )
}
export default Eunic
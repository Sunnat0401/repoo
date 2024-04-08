import './SideBar.css'
import header from '../../assets/Home.png'
import trending from '../../assets/Trending.png'
import subsc from '../../assets/Subscriptions.png'
import library from '../../assets/Library.png'
import history from '../../assets/History.png'
import watch from '../../assets/Watch later.png'
import favorite from '../../assets/Favourites.png'
import link from '../../assets/Liked videos.png'
import music from '../../assets/Music.png'
import game from '../../assets/Games.png'
import showMore from '../../assets/Show more.png'
// users logo
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/User 3.png'
import user4 from '../../assets/User 4.png'
import user5 from '../../assets/User 5.png'
import user6 from '../../assets/User 6.png'
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="wrapper">
            <ul className="sidebar-lis">
                <li className="sidebar-item">
                    <Link to="/" className="sidebar-link">
                        <img src={header} alt="img" className="sidebar-img" />
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/trending" className="sidebar-link">
                        <img src={trending} alt="img" className="sidebar-img" />
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/subscriptions" className="sidebar-link">
                        <img src={subsc} alt="img" className="sidebar-img" />
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/library" className="sidebar-link">
                        <img src={library} alt="img" className="sidebar-img" />
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/history" className="sidebar-link">
                        <img src={history} alt="img" className="sidebar-img" />
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/watch" className="sidebar-link">
                        <img src={watch} alt="img" className="sidebar-img" />
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/favorite" className="sidebar-link">
                        <img src={favorite} alt="img" className="sidebar-img" />
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/like" className="sidebar-link">
                        <img src={link} alt="img" className="sidebar-img" />
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/music" className="sidebar-link">
                        <img src={music} alt="img" className="sidebar-img" />
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/game" className="sidebar-link">
                        <img src={game} alt="img" className="sidebar-img" />
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="https://www.youtube.com/" className="sidebar-link">
                        <img src={showMore} alt="img" className="sidebar-img" />
                    </Link>
                </li>
            </ul>
            <ul className="sidebar-subscriptions">
                
                <li className='sidebar-text'>Subscriptions</li>
                <li className="subscription-info">
                    <Link to="/gussipage" className="subscription-link">
                         <img src={user1} alt="img" className="subscription-img" /> 
                    </Link>
                </li>
                <li className="subscription-info">
                    < Link to="/nara" className="subscription-link">
                         <img src={user2} alt="img" className="subscription-img" /> 
                    </Link>
                </li>
                <li className="subscription-info">
                    <Link to="/belle" className="subscription-link">
                         <img src={user3} alt="img" className="subscription-img" /> 
                    </Link>
                </li>
                <li className="subscription-info">
                    <Link to="/eunic" className="subscription-link">
                         <img src={user4} alt="img" className="subscription-img" /> 
                    </Link>
                </li>
                <li className="subscription-info">
                    <Link to="/emma" className="subscription-link">
                         <img src={user5} alt="img" className="subscription-img" /> 
                    </Link>
                </li>
                <li className="subscription-info">
                    <Link  to="/beah" className="subscription-link">
                         <img src={user6} alt="img" className="subscription-img" /> 
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar
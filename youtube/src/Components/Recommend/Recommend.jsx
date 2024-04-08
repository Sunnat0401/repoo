import './Recommend.css'
import cover1 from '../../assets/Cover.png'
import cover2 from '../../assets/Cover (1).png'
import cover3 from '../../assets/Cover (2).png'
const Recommend = () => {
  return (
    <div className='recommend'>
        <h3>Recommend</h3>
         <div className="recommend-cards">
            <div className="recommend-card">
            <img src={cover1} alt="cover" className="recommend-img" />
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
            <div className="recommend-card">
            <img src={cover2} alt="cover" className="recommend-img" />
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
            <div className="recommend-card">
            <img src={cover3} alt="cover" className="recommend-img" />
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
         </div>
    </div>
  )
}

export default Recommend
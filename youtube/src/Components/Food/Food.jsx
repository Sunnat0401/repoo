import './Food.css'
import foodIcon from '../../assets/Oval.png'
import  cover1 from '../../assets/Cover (3).png'
import cover2 from '../../assets/Cover (4).png'
import cover3 from '../../assets/Cover (5).png'
import cover4 from '../../assets/Cover (6).png'
import cover5 from '../../assets/Cover (7).png'
import cover6 from '../../assets/Cover (8).png'
const Food = () => {
  return (
    <div className='food'>
        <div className="food-top">
        <img className='footer-logo' src={foodIcon} alt="icon" />
        <h4 className='footer-title'>Food & Drink</h4>
        <p className='footer-text'>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="food-cards">
            <div className="food-card">
                <img className='food-image' src={cover1} alt="cover" />
                <h4
                >  Food Delivery.</h4>
                <p className='footer-text'>Bon appetit</p>
            </div>
            <div className="food-card">
                <img className='food-image' src={cover2} alt="cover" />
                <h4
                >  Food Delivery.</h4>
                <p className='footer-text'>Bon appetit</p>
            </div>
            <div className="food-card">
                <img className='food-image' src={cover3} alt="cover" />
                <h4
                >  Food Delivery.</h4>
                <p className='footer-text'>Bon appetit</p>
            </div>
            <div className="food-card">
                <img className='food-image' src={cover4} alt="cover" />
                <h4
                >  Food Delivery.</h4>
                <p className='footer-text'>Bon appetit</p>
            </div>
            <div className="food-card">
                <img className='food-image' src={cover5} alt="cover" />
                <h4
                >  Food Delivery.</h4>
                <p className='footer-text'>Bon appetit</p>
            </div>
            <div className="food-card">
                <img className='food-image' src={cover6} alt="cover" />
                <h4
                >  Food Delivery.</h4>
                <p className='footer-text'>Bon appetit</p>
            </div>
        </div>
    </div>
  )
}

export default Food
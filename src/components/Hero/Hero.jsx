import { HeroImg } from '../../assets/images'
import './Hero.css'

export default function Hero() {
  return (
    <div className='hero'>
        <div className="hero-content">
            <h1 className="hero-content-title">
                  We Are The Best <span>Digital Agency</span> for business
            </h1>
            <p className='hero-content-parag'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <a href="/">Contact Us</a>
        </div>
        <div className="hero-img">
            <img src={HeroImg} alt="" />
        </div>
    </div>
  )
}
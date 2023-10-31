import { AboutImg } from '../../../../assets/images'
import { Button, Container, AboutCard } from '../../../../components'
import { FaRegFile, FaCode, FaCog, FaExternalLinkAlt } from 'react-icons/fa'
import './AboutUs.css'

export default function AboutUs() {
    return (
        <section className='about' id='aboutUs'>
            <Container>
                <div className="row">
                    <div className="about-img">
                        <img src={AboutImg} alt="" />
                    </div>
                    <div className="about-content">
                        <div className="about-title">
                            <p>About Us</p>
                            <h2>We Are <span>Making Ideas Better</span> For Everyone</h2>
                        </div>
                        <div className="about-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue praesent. Lorem vulputate orci eget mi, sed pulvinar.
                            </p>
                            <p>
                                Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet. Adipiscing feugiat vel at posuere in. Pellentesque volutpat vestibulum.
                            </p>
                        </div>
                        <Button>Contact Us</Button>
                    </div>
                </div>
                <div className="cards">
                    <AboutCard bgColor={'FF5300'} text={'World leader in consulting and finance'}><FaRegFile/></AboutCard>
                    <AboutCard bgColor={'7b7b7b'} text={'A focused team with a specialized skill'}><FaCode/></AboutCard>
                    <AboutCard bgColor={'00ACFF'} text={'Trusted and professional advisors for you'}><FaCog/></AboutCard>
                    <AboutCard bgColor={'373737'} text={'Experience to give you a better results'}><FaExternalLinkAlt/></AboutCard>
                </div>
            </Container>
        </section>
    )
}
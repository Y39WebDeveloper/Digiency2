import { Container, ContactCard, Button } from '../../../../components'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import './Contact.css'
import { BrandImg1, BrandImg2, BrandImg3, BrandImg4, ContactImg, Map } from '../../../../assets/images'

export default function Contact() {
    return (
        <section className='contact' id='contact'>
            <Container>
                <div className="title">
                    <p>Contact Us</p>
                    <h2>
                        Feel <span>Free <br />to Contact</span> With Us
                    </h2>
                </div>
                <div className="cards">
                    <ContactCard
                        icon={<FaEnvelope />}
                        title={'Drop Line'}
                        subTitle={'Mail Us'}
                        link1={'Support87@gmial.com'}
                        link2={'ijkuiu874@gmial.com'}
                    />
                    <ContactCard
                        icon={<FaPhoneAlt />}
                        title={'24/7 Service'}
                        subTitle={'Call Us'}
                        link1={'+880 265 98745'}
                        link2={'+895 855 85589'}
                    />
                    <ContactCard
                        icon={<FaMapMarkerAlt />}
                        title={'Location'}
                        subTitle={'Visit Us'}
                        link1={'158 ralegih sit, houston, yk 5896,uk'}
                        link2={''}
                    />
                </div>
                <div className="contact-area">
                    <div className="img">
                        <img src={ContactImg} alt="" />
                    </div>
                    <form className="contact-form">
                        <h3>
                            Send Your <span>Message To Us</span>
                        </h3>
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="number" placeholder='Mobile No' />
                        <input type="text" placeholder='Subject' />
                        <textarea placeholder='Send Message'></textarea>
                        <Button>Send Message</Button>
                    </form>
                </div>
                <div className="map">
                    <img src={Map} alt="" />
                </div>
                <div className="brands">
                    <img src={BrandImg1} alt="" />
                    <img src={BrandImg2} alt="" />
                    <img src={BrandImg3} alt="" />
                    <img src={BrandImg4} alt="" />
                </div>
            </Container>
        </section>
    )
}
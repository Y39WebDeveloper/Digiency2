import { FaFacebookF, FaInstagram, FaPaperPlane, FaSkype, FaTwitter } from 'react-icons/fa'
import { Container } from '../../../../components'
import LogoDark from '../../../../components/Logo/logoDark.svg'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="ftr-1">
                <Container>
                    <div className="row">
                        <div className="box-1">
                            <img src={LogoDark} className='logo' alt="logo" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum.
                            </p>
                            <ul className="social">
                                <li>
                                    <a href="/"><FaFacebookF /></a>
                                </li>
                                <li>
                                    <a href="/"><FaInstagram /></a>
                                </li>
                                <li>
                                    <a href="/"><FaTwitter /></a>
                                </li>
                                <li>
                                    <a href="/"><FaSkype /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="box-2">
                            <h2>
                                Company
                            </h2>
                            <ul>
                                <li>
                                    <a href="#aboutUs">About Us</a>
                                </li>
                                <li>
                                    <a href="#work">Our Work</a>
                                </li>
                                <li>
                                    <a href="#clients">Client</a>
                                </li>
                                <li>
                                    <a href="/blog">Our Blog</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="box-2">
                            <h2>
                                Services
                            </h2>
                            <ul>
                                <li>
                                    Graphic Design
                                </li>
                                <li>
                                    UI/UX Design
                                </li>
                                <li>
                                    Web Development
                                </li>
                                <li>
                                    App Developmeny
                                </li>
                                <li>
                                    Web Hosting
                                </li>
                            </ul>
                        </div>
                        <div className="box-3">
                            <h2>Newsletter</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget varius viverra in.
                            </p>
                            <div className="input">
                                <input type="email" placeholder='info@gmail.com' />
                                <div className="icon">
                                    <FaPaperPlane />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="ftr-2">
                <Container>
                    <p><span>&copy;</span>Copyright 2021. All Right Reserved By Ojjomedia</p>
                </Container>
            </div>
        </footer>
    )
}
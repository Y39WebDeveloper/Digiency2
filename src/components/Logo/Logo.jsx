import LogoImg from './logo.svg'
import './Logo.css'
export default function Logo() {
    return (
        <a className="logo" href="index.html">
            <img src={LogoImg} alt="logo" />
        </a>
    )
}
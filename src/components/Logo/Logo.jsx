import LogoImg from './logo.svg'
import LogoDarkImg from './logoDark.svg'
import './Logo.css'
import { useState, useEffect ,useContext } from 'react'
import { DarkContext } from '../../App'
export default function Logo() {
    const [logo, setLogo] = useState(LogoImg)
    const {isDark} = useContext(DarkContext)
    useEffect(()=>{
        document.body.classList.contains('dark') ? setLogo(LogoDarkImg) : setLogo(LogoImg)
    },[isDark])
    /* Utilise UseContext */
    return (
        <a className="logo" href="index.html">
            <img src={logo} alt="logo" />
        </a>
    )
}
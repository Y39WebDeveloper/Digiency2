import LogoImg from './logo.svg'
import LogoDarkImg from './logoDark.svg'
import './Logo.css'
import { useState } from 'react'
import { useEffect } from 'react';
export default function Logo() {
    const [logo, setLogo] = useState(LogoImg)
    /* Utilise UseContext */
    useEffect(()=>{
        console.log('hello')
    },[logo])
    return (
        <a className="logo" href="index.html">
            <img src={logo} alt="logo" />
        </a>
    )
}
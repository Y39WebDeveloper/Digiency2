import './ScrollTop.css'
import ScrollImg from './arrow.svg'
import { useState } from 'react'

export default function ScrollTop(){

    // let scrollPos = 0;
    const [scrollPos, setScrollPos] = useState(0);
    // let scrollTop = () => window.scroll({ left: 0, top: 0, behavior: "smooth" })
    // let scrollShow = () => {
    //     let winy = window.scrollY;
    //     if (winy < scrollPos) {
    //         document.getElementById("scrollBtn").classList.add("show");
    //     } else {
    //         document.getElementById("scrollBtn").classList.remove("show");
    //     }
    //     scrollPos = winy
    // };
    // window.onscroll = scrollShow
    window.onscroll = () => {
        (window.scrollY < scrollPos) ? document.getElementById("scrollBtn").classList.add("show") : document.getElementById("scrollBtn").classList.remove("show");

        setScrollPos(window.scrollY)
    }
    return (
        <div className='scroll-top' id='scrollBtn' onClick={() => {window.scroll({left: 0, top: 0, behavior: "smooth"})}}>
            <img src={ScrollImg} alt='top' />
        </div>
    )
}
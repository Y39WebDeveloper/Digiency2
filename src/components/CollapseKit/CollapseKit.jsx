import { useState } from 'react'
import './CollapseKit.css'

export default function CollapseKit(props) {
    const [collapse, setCollapse] = useState(false)
    return (
        <>
            <div className='collapse-btn' onClick={() => { setCollapse(v => !v) }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={collapse ? "collapse show" : "collapse"}>
                {props.children}
            </div>
        </>
    )
}
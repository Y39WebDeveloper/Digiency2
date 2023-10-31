import { FaRegFile } from 'react-icons/fa'
import './AboutCard.css'

export default function AboutCard(props) {
  return (
    <div className='about-card'>
            <div className='icon' style={{ backgroundColor: `#${props.bgColor}`, filter: `drop-shadow(4px 5px 15px #${props.bgColor}66)`}}>
                {props.children}
            </div>
          <p>{props.text}</p>
    </div>
  )
}
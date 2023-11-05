import { FaSearch } from 'react-icons/fa'
import './WorkWidget.css'

export default function WorkWidget(props) {
  return (
      <div className="widget">
          <div className="overlay">
              <a href="/"><FaSearch /></a>
              <h4>Latest Work</h4>
              <p>{props.category}</p>
          </div>
          <img src={props.img} alt="" />
      </div>
  )
}
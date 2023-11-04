import { FaFacebookF, FaInstagram, FaTwitter, FaSkype } from 'react-icons/fa'
import './TeamCard.css'

function TeamCard(props) {
  return (
    <div className='team-card'>
        <ul className="team-social">
            <li>
                <a href="/"><FaFacebookF/></a>
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
        <div className="card-img">
            <img src={props.img} alt="" />
        </div>
        <div className="card-info">
              <h5>{props.name}</h5>
              <p>{props.job}</p>
        </div>
    </div>
  )
}

export default TeamCard
import './ContactCard.css'

export default function ContactCard(props) {
  return (
    <div className='contact-card'>
        <div className="card-head">
            <div className="icon">
                  {props.icon}
            </div>
            <div className="card-title">
                <h4>{props.title}</h4>
                <h3>{props.subTitle}</h3>
            </div>
        </div>
        <div className="card-body">
              <h5>{props.link1}</h5>
              <h5>{props.link2}</h5>
        </div>
    </div>
  )
}
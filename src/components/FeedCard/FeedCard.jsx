import './FeedCard.css'

export default function FeedCard(props) {
  return (
    <div className='feed-card'>
        <img src={props.img} alt="" />
        <div className="card-title">
              <h4>{props.name}</h4>
              <p>{props.job}</p>
        </div>
        <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing.
        </div>
    </div>
  )
}
import './ExpCard.css'

export default function ExpCard(props) {
  return (
    <div className='exp-card'>
        <h1>{props.num}+</h1>
        <h5>{props.txt}</h5>
    </div>
  )
}
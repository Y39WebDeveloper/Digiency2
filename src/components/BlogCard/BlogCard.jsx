import './BlogCard.css'

export default function BlogCard(props) {
    return (
        <div className='card-blog'>
            <div className="card-content">
                <div className='text'>
                    <p>{props.title}</p>
                    <h4>{props.content}</h4>
                </div>
                <div className="img">
                    <img src={props.blogImg} alt="" />
                </div>
            </div>
            <div className="card-profile">
                <img src={props.profileImg} alt="" />
                <div className="info">
                    <h5>{props.name}</h5>
                    <p>{props.date} <span></span>5 min Read</p>
                </div>
            </div>
        </div>
    )
}
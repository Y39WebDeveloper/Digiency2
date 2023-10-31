import './Button.css'
export default function Button(props) {
  return (
    <a className='btn btn-primary'>{props.children}</a>
  )
}
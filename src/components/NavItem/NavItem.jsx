import './NavItem.css'

export default function NavItem(props) {
  return (
    <li className='nav-item'>
        <a href={props.target}>{props.children}</a>
    </li>
  )
}
import { NavItem, CollapseKit } from '../'
import './Navigation.css'

export default function Navigation() {
    return (
        <CollapseKit>
            <ul className='navigation'>
                <NavItem target={"/"} >Home</NavItem>
                <NavItem target={"#aboutUs"} >About Us</NavItem>
                <NavItem target={"#work"} >Our Work</NavItem>
                <NavItem target={"#clients"} >Clients</NavItem>
                <NavItem target={"/blog"} >Our Blog</NavItem>
                <NavItem target={"#contact"} >Contact Us</NavItem>
            </ul>
        </CollapseKit>
    )
}
import { Logo, Navigation, Container } from '../../components'
import { BsSun } from 'react-icons/bs'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="iop">
      <Container>
        <nav className='navbar'>
          <Logo />
          <Navigation />
          <BsSun />
        </nav>
      </Container>
    </div>
  )
}
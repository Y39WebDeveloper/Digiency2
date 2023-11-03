import { Logo, Navigation, Container } from '../../components'
import { BsSun } from 'react-icons/bs'
import './Navbar.css'

export default function Navbar() {
  const dark = () => { document.body.classList.toggle('dark')}
  return (
    <div className="iop">
      <Container>
        <nav className='navbar'>
          <Logo />
          <Navigation />
          <BsSun id='darkLight' onClick={dark} />
        </nav>
      </Container>
    </div>
  )
}
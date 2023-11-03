import { Logo, Navigation, Container } from '../../components'
import { BsSun } from 'react-icons/bs'
import { useContext } from 'react'
import { DarkContext } from '../../App'
import './Navbar.css'

export default function Navbar() {
  const {setIsDark} = useContext(DarkContext)
  const dark = () => {
    document.body.classList.toggle('dark')
    document.body.classList.contains('dark') ? setIsDark(true) : setIsDark(false)
  }
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
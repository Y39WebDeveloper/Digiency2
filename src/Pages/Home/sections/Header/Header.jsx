import { Container, Hero, Navbar } from '../../../../components'
import './Header.css'

export default function Header() {
  return (
    <header>
      <Navbar />
      <Container>
        <Hero />
      </Container>
    </header>
  )
}
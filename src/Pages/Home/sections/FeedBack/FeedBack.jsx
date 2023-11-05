import { Feed1, Feed2 } from '../../../../assets/images'
import { Container, FeedCard } from '../../../../components'
import './FeedBack.css'

function FeedBack() {
  return (
    <section className='feedback'>
        <Container>
              <div className="title">
                  <p>Our Work</p>
                  <h2>
                      Some <span>Great <br /> Words</span> From Our Clients
                  </h2>
              </div>
              <div className="cards">
                  <FeedCard name={'Justin Septimus'} job={'CEO,word yt'} img={Feed1} />
                  <FeedCard name={'Ashly Gouse'} job={'Managing Director'} img={Feed2} />
              </div>
        </Container>
    </section>
  )
}

export default FeedBack
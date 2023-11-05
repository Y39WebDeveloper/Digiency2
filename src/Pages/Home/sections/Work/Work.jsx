import { Work1, Work2, Work3, Work4, Work5, Work6 } from '../../../../assets/images'
import { Container, WorkWidget } from '../../../../components'
import './Work.css'

export default function Work() {
  return (
    <section className='work' id='work'>
      <Container>
        <div className="title">
          <p>Our Work</p>
          <h2>
            We Have Some <br /><span>Designed & Development</span> Projects
          </h2>
        </div>
        <div className="filter-scroll">
          <ul className="filter">
            <li>All</li>
            <li>Grahpic Design</li>
            <li>UI/UX Design</li>
            <li>Web Development</li>
          </ul>
        </div>
        <div className="works">
          <WorkWidget img={Work1} category={'UI/UX Design'} />
          <WorkWidget img={Work2} category={'Web Development'} />
          <WorkWidget img={Work3} category={'Grahpic Design'} />
          <WorkWidget img={Work4} category={'Grahpic Design'} />
          <WorkWidget img={Work5} category={'UI/UX Design'} />
          <WorkWidget img={Work6} category={'Web Development'} />
        </div>
      </Container>
    </section>
  )
}
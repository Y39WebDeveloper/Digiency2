import { Work1, Work2, Work3, Work4, Work5, Work6 } from '../../../../assets/images'
import { FaSearch } from 'react-icons/fa'
import { Container } from '../../../../components'
import './Work.css'

export default function Work() {
  return (
    <section className='work'>
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
          <div className="widget">
            <div className="overlay">
              <a href="/"><FaSearch /></a>
              <h4>Latest Work</h4>
              <p>UI/UX Design</p>
            </div>
            <img src={Work1} alt="" />
          </div>
          <div className="widget">
            <img src={Work2} alt="" />
          </div>
          <div className="widget">
            <img src={Work3} alt="" />
          </div>
          <div className="widget">
            <img src={Work4} alt="" />
          </div>
          <div className="widget">
            <img src={Work5} alt="" />
          </div>
          <div className="widget">
            <img src={Work6} alt="" />
          </div>
        </div>
      </Container>
    </section>
  )
}
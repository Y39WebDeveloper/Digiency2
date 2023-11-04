import { Team1, Team2, Team3, Team4 } from '../../../../assets/images'
import { Container, TeamCard } from '../../../../components'
import './Team.css'

export default function Team() {
    return (
        <section className='team'>
            <Container>
                <div className="title">
                    <p>Team Member</p>
                    <h2>
                        We Have<br /><span>Some Awesome</span> People
                    </h2>
                </div>
                <div className="card-scroll">
                    <div className="cards">
                        <TeamCard img={Team1} name={'Gustavo Herwitz'} job={'UI/UX Designer'} />
                        <TeamCard img={Team2} name={'Phillip Curtis'} job={'Graphic Designer'} />
                        <TeamCard img={Team3} name={'Bernardo Walker'} job={'Web Developer'} />
                        <TeamCard img={Team4} name={'Abram Vaccaro'} job={'App Developer'} />
                    </div>
                </div>
            </Container>
        </section>
    )
}
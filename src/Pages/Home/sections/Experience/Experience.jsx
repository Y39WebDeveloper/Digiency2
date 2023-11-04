import { Button, Container, ExpCard } from '../../../../components'
import './Experience.css'

export default function Experience() {
    return (
        <section className='exp'>
            <Container>
                <div className="row">
                    <div className="content">
                        <div className="title">
                            <p>About Us</p>
                            <h2>We Have Completed <span>150+ Projects</span> Succesfully</h2>
                        </div>
                        <div className="text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue praesent. Lorem vulputate orci eget mi, sed pulvinar.
                            </p>
                            <p>
                                Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet. Adipiscing feugiat vel at posuere in. Pellentesque volutpat vestibulum.
                            </p>
                        </div>
                        <Button>Contact Us</Button>
                    </div>
                    <div className="cards">
                        <div>
                            <ExpCard num={250} txt={'Global Customer'} />
                            <ExpCard num={156} txt={'Project Completed'} />
                        </div>
                        <div>
                            <ExpCard num={50} txt={'Team Member'} />
                            <ExpCard num={15} txt={'Our Company'} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
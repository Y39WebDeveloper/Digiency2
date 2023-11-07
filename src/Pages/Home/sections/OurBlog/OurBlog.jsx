import { Blog1, Blog2, Feed1, Feed2 } from '../../../../assets/images'
import { Container, BlogCard } from '../../../../components'
import './OurBlog.css'

export default function OurBlog() {
    return (
        <section className='our-blog'>
            <Container>
                <div className="title">
                    <p>Our Blog</p>
                    <h2>
                        Our Latest <span>Blogs<br /> Will Keep</span> Everyone Updated
                    </h2>
                </div>
                <div className="cards">
                    <BlogCard
                        title={'Graphic Design'}
                        name={'Cristofer Westervelt'}
                        content={'35 Stellar Graphic Design Blogs to Keep You Educated and Inspired'}
                        blogImg={Blog1}
                        profileImg={Feed1}
                        date={'January 25, 2017'}
                    />
                    <BlogCard
                        title={'Managing Director'}
                        name={'Haylie Mango'}
                        content={'Ridiculously powerful 2021 iPad Pro may drop this month'}
                        blogImg={Blog2}
                        profileImg={Feed2}
                        date={'January 25, 2021'}
                    />
                </div>
            </Container>
        </section>
    )
}
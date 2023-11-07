import { AboutUs, Contact, Experience, FeedBack, Header, OurBlog, Team, Work } from "./sections"
export default function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <Experience />
      <Team />
      <Work />
      <FeedBack />
      <OurBlog />
      <Contact />
    </>
  )
}
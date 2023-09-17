import './homePage.css';
import bgVideo from '../assets/bg_video.mp4'
// import { BsFacebook } from 'react-icons/fa';

const HomePage = () => {
  return (
    <>
    <div className='main-section'>
        <video className='bg-img' src={bgVideo} autoPlay loop />
          <div id='content'>
            <p>WE DON&apos;T JUST LOVE HAIR, <br /> WE LOVE PEOPLE</p>
            <button>BOOK NOW</button>
          </div>
      </div>
    <div className='second-section'>
      <h3>
        Our boutique salons offer hair services and products in a  welcoming environment, with a focus 
        on promoting and supporting inclusion and the well-being of our customers, employees and community.
      </h3>
    </div>
    <div className="contact-section">
      <div className='social'>
        <div className="icon">
          <h4>Connect on Social</h4>
          <div className="icon">
            {/* <BsFacebook />? */}
          </div>
        </div>
      <h5>
        Subscribe
      </h5>
      <p>Subscribe to our mailing list for updates and exclusive giveaways.</p>
        <h5>Email Address</h5>
        <input type="text" placeholder="<EMAIL>" name="" value=""/>
        <button>Subscribe</button>
      </div>
        <div className="social">
          <br />
          <h5>Hours</h5>
        <p>Services are available by appointment at our four locations. <br /> Each location offers extended hours.</p>
      <div className="border">
          <p>Ginger & Maude - Fremout (Northeast) <br /> <span>Mon-Sun 6am to 10pm</span></p>
          <p>Ginger & Maude - Salbtown (Northwest) <br /> <span>Mon-Sun 6am to 10pm</span></p>
          <p>Ginger & Maude - Foster-Powell (Southeast) <br /> <span>Mon-Sun 6am to 10pm</span></p>
          <p>Ginger & Maude - Multnomah Village (Southwest) <br /> <span>Mon-Sun 6am to 10pm</span></p>
        <button>Book Now</button>
      </div>
    </div>
        <div className="social-time">
          <br />
          <br />
          <h5>Call: <span>971.267.4080</span></h5>
          <h5>Text: <span>971.267.4080</span></h5>
          <h5>Email: <span>gingerhotmail@gmail.com</span></h5>
        </div>
      </div>
    </>
  )
}

export default HomePage

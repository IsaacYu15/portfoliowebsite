import './about.css'
import AboutImage from '../../assets/temp.png'
import Resume from '../../assets/Resume.pdf'
import {AiOutlineCloudDownload} from 'react-icons/ai'
import Card from '../../components/Card'
import data from './data'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image"/>
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                //adding in another class name and attaching it to the card component, such that we can style cards differently!
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
            YAYAYAYAYAY ABOUT ME
          </p>
          <p>
            MORE TEXT YAHHHHH
          </p>
          <a href={Resume} dowload className='btn primary'>Download Resume <AiOutlineCloudDownload/></a>

          
        </div>
      </div>
    </section>
  )
}

export default About
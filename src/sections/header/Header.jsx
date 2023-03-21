import'./header.css'
import HeaderImage from '../../assets/headerImage.PNG'
import data from './data'
import Resume from '../../assets/Resume.pdf'
import {AiOutlineCloudDownload} from 'react-icons/ai'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">

        <div className="header__content">
            <h1>ISAAC YU</h1>
            <p>Hey There! 👋</p>
            <p>My name is Isaac and I'm a Grade 12 student who loves to code in their free time. 
              I started off coding video games, but have moved on to developing various projects including pipelines, alogrithms, and websites!</p>
            <a href={Resume} dowload className='btn primary'>Download Resume <AiOutlineCloudDownload/></a>
        </div>



        <img className="profile" src={HeaderImage} alt="Portrait"/>


        <div className='header__socials'>
          {
            //iterate through all the items in data, setting the link to the name
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }

          </div> 

      </div>
    </header>
  )
}

export default Header
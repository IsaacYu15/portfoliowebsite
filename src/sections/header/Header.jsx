import'./header.css'
import HeaderImage from '../../assets/headerImage.PNG'
import data from './data'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">

        <div className="header__content">
            <h1>ISAAC YU</h1>
            <p>Hey There! 👋</p>
            <p>My names Isaac and I'm studying System Design Engineering at Waterloo. My passion for coding started 
              with making video games, but now I've started to explore other projects including
              the embed software and websites!</p>          
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
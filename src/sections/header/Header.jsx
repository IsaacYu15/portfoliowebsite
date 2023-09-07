import'./header.css'
import HeaderImage from '../../assets/headerImage.png' 
import data from './data'

const scrollToBio =()=> {
  const div = document.getElementsByClassName("container bio__container");

  div[0].scrollIntoView({
    block: "center",
    inline: "center",
  });

}
const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">

        <h1 className="headerBase">ISAAC YU</h1>  
        <h1 className="headerOverlay">ISAAC YU</h1>  

        <img className="profile" src={HeaderImage} alt="Portrait"/>
        
        <div className='header__socials'>
        {
          //iterate through all the items in data, setting the link to the name
          data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
        }
        </div> 

      </div>

      <button className="arrow" onClick={scrollToBio}></button>

      <div className="container bio__container  "> 
          <p>Hey! 👋 My names Isaac and I'm studying System Design Engineering at Waterloo. My passion for coding started
          with making video games, but now I've started to explore other projects including
          the embed software and websites! </p>  
      </div>

    </header>
  )
}

export default Header
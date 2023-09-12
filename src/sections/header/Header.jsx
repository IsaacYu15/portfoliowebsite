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
          <p>Hey! 👋 My name is Isaac and I'm studying Systems Design Engineering at Waterloo. I've been developing games for 
            5+ years, and have been exploring various applications programming in the real world. I'm always on the look out to learn new things
            such as working with embeded software in a research lab to learning 
            full stack development! </p>  
      </div>

    </header>
  )
}

export default Header
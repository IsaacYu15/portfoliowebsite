import'./header.css'
import HeaderImage from '../../assets/headerImage.PNG' 
import data from './data'

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

    </header>
  )
}

export default Header
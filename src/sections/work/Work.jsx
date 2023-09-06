import './work.css'
import data from './data'
import Card from '../../components/Card'
import {AiOutlineGithub, AiOutlineLink} from 'react-icons/ai'

const Services = () => {

  return (
    <section id="work">
      <div className="container work__container">
        
        <h2>FEATURED PROJECTS</h2>

        <div className="about__work">
           {

            data.map(item => 

               <Card key={item.id} className="about__card">    
                    <img className = "left" src={require('../../assets/' + item.source + '.png')} alt="logo"/>

                    <div className="right">
                      
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      <small>{item.lang}</small>
                     
                      <div className="links">
                        { item.link!=='N/A' && <a href={item.link} target="_blank" rel="noopener noreferrer"><AiOutlineLink/></a>} 
                        { item.git!=='N/A' && <a href={item.git} target="_blank" rel="noopener noreferrer"><AiOutlineGithub/></a>}
                      </div>

                    </div>

                    
              </Card>

            )
          }


        </div>
      </div>


    </section>
  )
}

export default Services
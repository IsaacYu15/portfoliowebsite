import './card.css'

const card = ({children, className, onClick}) => {
//props -> parameters for react components

  return (
    //get card class by default but bring in any other classes. 
    //for any onclick arguements, bring in onclick prop
    <article className={`card ${className}`} onClick={onClick}>
        {children}
    </article>
  )
}

export default card
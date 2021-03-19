import { useState } from "react"
import githubLogo from '../../assets/icons/GitHub-Mark-32px.png';

function Project(props) {

    const[isShown, setIsShown] = useState(false);
    const {image} = props;

    return(
        <div 
        onMouseEnter={()=>setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
            {!isShown && (<img
                src={image.photo}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
                /> )}
                
            {isShown && (
                <div className="img-info mx-1" 
                style={{backgroundImage: `url(${image.photo})`}}
                key={image.name}
                >
                        <a href={image.url} className="img-details">{image.name}</a>
                        <a href={image.github} className="img-details"><img src={githubLogo} alt="Github"></img></a>
                        <p className="img-details">{image.description}</p>
                        
                        </div>
                    
                    )
                }
            
        </div>
    )

 }

 export default Project;
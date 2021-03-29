import { useState } from "react"
import githubLogo from '../../assets/icons/GitHub-Mark-32px.png';

function Project(props) {

    const[isShown, setIsShown] = useState(false);
    const {image} = props;

    return(
        <div className="project-container"
        onMouseEnter={()=>setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
            <div className="img-info mx-1" 
                style={{backgroundImage: `url(${image.photo})`}}
                key={image.name}
                alt={image.name}
                >

            {isShown && (
                
                <>
                <a href={image.url} className="img-details">{image.name}</a>
                <a href={image.github} className="img-details"><img src={githubLogo} alt="Github"></img></a>
                <p className="img-details">{image.description}</p>
                        
                </>
                    
                    )
                }                       
                </div> 
                
            
        </div>
    )

 }

 export default Project;
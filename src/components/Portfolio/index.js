import { useState } from "react"
import special from '../../assets/images/something-special.png';
import dungeon from '../../assets/images/dungeonsend.png';
import run from '../../assets/images/run-buddy.png';
import food from '../../assets/images/food-festival.png';
import tech from '../../assets/images/tech-blog.png';
import budget from '../../assets/images/budget-tracker.png';

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Something Special',
            description: 'Group two Project',
            photo: special
        },
        {
            name: "Dungeon's End",
            description: 'Group one Project',
            photo: dungeon
        },
        {
            name: "Run Buddy",
            description: "Connects users to fitness trainers",
            photo: run
        },
        {
            name: "Food Festival",
            description: "Keeps users informed about upcoming food festivals",
            photo: food
        },
        {
            name: "Budget Tracker",
            description: "Allows user to track their budget online and offline",
            photo: budget
        },
        {
            name: "Tech Blog",
            description: "Allows users to post articles and comment on existing articles after logging in.",
            photo:tech
        }
    ])

    const[isShown, setIsShown] = useState(false);

    return (
        <div className="project-container"
           
        >
            {projects.map((image) => (
                <>
                
                {!isShown && (<img
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                src={image.photo}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
                /> )}
                
            {isShown && (
                    <img className="img-info mx1" onMouseLeave={() => setIsShown(false)}
                        src={image.photo}
                        alt={image.name}
                        key={image.name}
                        />
                    
                    )
                }
            
            
            </>
            ))}
            
        </div>
    )
}

export default Portfolio
import { useState } from "react"
import special from '../../assets/images/something-special.png';
import dungeon from '../../assets/images/dungeonsend.png';
import run from '../../assets/images/run-buddy.png';
import food from '../../assets/images/food-festival.png';
import tech from '../../assets/images/tech-blog.png';
import budget from '../../assets/images/budget-tracker.png';
import Project from '../Project/index.js';

function Portfolio() {

    const [projects] = useState([
        {
            name: 'Something Special',
            description: 'Group two Project',
            photo: special,
            url: "https://something-special2380.herokuapp.com/login",
            github: "https://github.com/Nickhill2380/something-special"
        },
        {
            name: "Dungeon's End",
            description: 'Group one Project',
            photo: dungeon,
            url: "https://nickhill2380.github.io/dungeons-end/",
            github: "https://github.com/Nickhill2380/dungeons-end"
        },
        {
            name: "Run Buddy",
            description: "Connects users to fitness trainers",
            photo: run,
            url: "https://nickhill2380.github.io/run-buddy/",
            github: "https://github.com/Nickhill2380/run-buddy"
        },
        {
            name: "Food Festival",
            description: "Keeps users informed about upcoming food festivals",
            photo: food,
            url: "https://nickhill2380.github.io/food-festival/",
            github: "https://github.com/Nickhill2380/food-festival"
        },
        {
            name: "Budget Tracker",
            description: "Allows user to track their budget online and offline",
            photo: budget,
            url: "https://budget-tracker2380.herokuapp.com/",
            github: "https://github.com/Nickhill2380/budget-tracker"
        },
        {
            name: "Tech Blog",
            description: "Allows users to post articles and comment on existing articles after logging in.",
            photo:tech,
            url: "https://tech-blog2380.herokuapp.com/",
            github: "https://github.com/Nickhill2380/tech-blog"
        }
    ])

    return (
        <div className="project-container">
            {projects.map((image) => (
                <Project 
                    image ={image}
                />
             ))}
            
        </div>
    )
}

export default Portfolio
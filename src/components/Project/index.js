import { useState } from "react"
import special from '../../assets/images/something-special.png';
import dungeon from '../../assets/images/dungeonsend.png';
import run from '../../assets/images/run-buddy.png';

function Project() {
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
            description: " App to connect users to fitness trainers",
            photo: run
        }
    ])

    return (
        <div>
            {projects.map((image) => (
                <img
                src={image.photo}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
                />
            ))}
        </div>
    )
}

export default Project
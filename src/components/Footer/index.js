import gitLogo from '../../assets/icons/GitHub-Mark-64px.png';
import linkedLogo from '../../assets/icons/LI-In-Bug.png';

function footer() {
    return (
        <footer>
     
        <p>
            <a href="https://github.com/Nickhill2380"><img src={gitLogo} className="logo" alt="Github"/></a>
        </p>

        <p>
            <a href="https://www.linkedin.com/in/nick-hill-04357677/"><img src={linkedLogo}className="logo" alt="Linkedin"/></a>
        </p>
        </footer>
    )
}

export default footer;
import resumeFile from '../../assets/documents/nick-hill-resume.pdf';
import resumePhoto from '../../assets/images/resume-photo.png'

function Resume() {

    return (
        <section>
            <div id="resume">
                <img src={resumePhoto} alt="Nick's resume"></img>
                <div>
                <div>
                <h3>Front-End Skills</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li>
                </ul>
            </div>
            <div>
                <h3>Back-End Skills</h3>
                <ul>
                    <li>API</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                </ul>
            </div>
            </div>
            
            <a href={resumeFile} download={resumeFile}>Download Resume</a>
            </div>
        </section>
    )
}

export default Resume;
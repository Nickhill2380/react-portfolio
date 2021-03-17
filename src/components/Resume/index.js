import resumeFile from '../../assets/documents/nick-hill-resume.pdf'

function Resume() {

    return (
        <section>
            <div id="resume">
                </div>
                <div>
                <div>
                <h2>Front-End Skills</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Javascript</li>
                </ul>
            </div>
            <div>
                <h2>Back-End Skills</h2>
                <ul>
                    <li>API</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                </ul>
            </div>
            
            <a href={resumeFile} download={resumeFile}>Download Resume</a>
            </div>
        </section>
    )
}

export default Resume;
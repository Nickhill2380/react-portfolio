import profileImage from '../../assets/images/profile-pic.jpg'

function About() {
    return (
      
      <section className="my-5">
        <title>About me</title>
        <h1 id="about">About me</h1>
        <img src={profileImage} className="my-2" alt="Nick Hill" />
        <div className="my-2">
          <p>
          Welcome to my porfolio. I am currently taking part in a coding boot camp with UCF. 
          I will keep this page updated with the latest and greatest things I'm working on. 
          I currently live with my wife and our two dogs in Southwest Florida.
          </p>
        </div>
      </section>
    );
  }
  
  export default About;
  
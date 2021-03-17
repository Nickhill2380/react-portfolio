import profileImage from '../../assets/images/profile-pic.jpg'

function About() {
    return (
      
      <section className="my-5 info">
        <h2 id="about">About me</h2>
        <div id="about-info">
        <img src={profileImage} className="my-2" id="profile-pic" alt="Nick Hill" />
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
  
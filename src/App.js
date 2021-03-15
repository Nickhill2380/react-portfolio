import { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
// import Project from './components/Project';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {

  // const [contactSelected, setContactSelected] = useState(false);
  // const [resumeSelected, setResumeSelected] = useState(false);
  const [focus] = useState([
        'About',
        'Project',
        'Contact',
        'Resume'
  ])

  const [currentFocus, setCurrentFocus] = useState(focus[0])

  return (
    <div>
      <header>
        <Header 
        focus={focus}
        currentFocus={currentFocus}
        setCurrentFocus= {setCurrentFocus}
        />
      </header>
      <main>
        { currentFocus === focus[0] ?(
            <About></About>
        ): currentFocus === focus[2]? (
          <ContactForm></ContactForm>
        ) : currentFocus === focus[3]? (
          <Resume></Resume>
        ) : (
          <span>Projects</span>
        )
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;

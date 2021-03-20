import { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {


  const [focus] = useState([
        'About',
        'Portfolio',
        'Contact',
        'Resume'
  ])

  const [currentFocus, setCurrentFocus] = useState(focus[0])

  return (
    <div>
        <Header 
        focus={focus}
        currentFocus={currentFocus}
        setCurrentFocus= {setCurrentFocus}
        />
      <main>
        { currentFocus === focus[0] ?(
            <About></About>
        ): currentFocus === focus[2]? (
          <ContactForm></ContactForm>
        ) : currentFocus === focus[3]? (
          <Resume></Resume>
        ) : (
          <Portfolio></Portfolio>
        )
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;

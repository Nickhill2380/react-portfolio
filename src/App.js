import { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
// import Project from './components/Project';
import ContactForm from './components/Contact';

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <header>
        <Header contactSelected={contactSelected}
        setContactSelected={setContactSelected}/>
      </header>
      <main>
      {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;

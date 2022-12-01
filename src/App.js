import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './components/About Me';

function App() {
  const [categories] = useState([
    {
      name: 'Projects',
      description: 'Photos of constructed applications and link to deployed application',
    },
    { name: 'Resume', description: 'a link to a downloadable resume and a list of the developers proficiencies' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        
      </main>
      <About></About>
      <Footer></Footer>
    </div>

  );
}

export default App;

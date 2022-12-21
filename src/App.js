import React, { useState } from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// import Resume from "./components/Resume";
// import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// root component (wraps other components)
function App() {

  // const [categories] = useState([
  //   { name: "About" },
  //   { name: "Portfolio" },
  //   {
  //     name: "Contact",
  //   },
  //   {
  //     name: "Resume",
  //   },
  // ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Header>

        {/* <Navigation
          ategories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Navigation> */}

      </Header>
      <Portfolio />
      <About></About>
      <Footer>
        
        <Contact></Contact>

      </Footer>
    </div>
  );
}

export default App;


        // {/* {!contactSelected ? (
        //   <>
        //     <Portfolio currentCategory={currentCategory}></Portfolio>
        //     <About></About>

        //   </>
        // ) : (
          
        // )} */}
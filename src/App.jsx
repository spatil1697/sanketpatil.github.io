import React, { useState, useEffect } from 'react';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Portfolio from "./components/projects/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Resume from "./components/resume/Resume";
import Loading from "./components/loading/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? <Loading /> : (
        <>
          <Header/>
          <Nav/>
          <About/>
          <Skills/>
          <Resume/>
          <Portfolio/>
          <Contact/>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default App;
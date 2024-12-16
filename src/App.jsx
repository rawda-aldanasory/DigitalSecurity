import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";  
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Lessons from "./components/Lessons/Lessons";  
import Lesson1 from "./components/Lessons/Lesson1";
import Lesson2 from "./components/Lessons/Lesson2";
import Lesson3 from "./components/Lessons/Lesson3";
import Activities from "./components/Activities/Activities"; 
import Quiz from "./components/Quiz/Quiz";


const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden bg-white text-dark">
        <Navbar /> 
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Banner />
              <Subscribe />
              <Banner2 />
            </>
          } />
          <Route path="/Lessons" element={<Lessons />} />
          <Route path="/Lessons/Lesson1" element={<Lesson1 />} />
          <Route path="/Lessons/Lesson2" element={<Lesson2 />} />
          <Route path="/Lessons/Lesson3" element={<Lesson3 />} />

          <Route path="/Activities" element={<Activities />} />
          <Route path="/Quiz" element={<Quiz />} />

        </Routes>
        <Footer />  
      </main>
    </Router>
  );
};

export default App;

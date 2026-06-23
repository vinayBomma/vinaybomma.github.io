import React from "react";
import "./App.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Apps from "./sections/Apps";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-lightBg dark:bg-primary text-lightText dark:text-darkText">
        <Header />
        <main>
          <Hero />
          <Apps />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

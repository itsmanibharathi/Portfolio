import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Journey from "./components/Journey"
import { Helmet } from "react-helmet";
import favicon from "../favicon.svg"
// import Bot from "./components/Bot";
console.log('ENV vlaus:'+JSON.stringify(import.meta.env));
const App = () => {
  return (
    <div className="cursor-default" >
      <Helmet>
        <title>KiKO</title>
        <meta
          name="description"
          content="Hey there! Ready to dive into the fascinating career journey of Manibharathi? Get inspired and maybe even find your own path to success along the way. Let's explore together!"  
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={favicon} />
        <link rel="apple-touch-icon" href={favicon} />
        {/* og tag */}
        <meta property="og:title" content="KiKO" />
        <meta
          property="og:description"
          content="Hey there! Ready to dive into the fascinating career journey of Manibharathi? Get inspired and maybe even find your own path to success along the way. Let's explore together!"
        />
        <meta property="og:type" content="Portfloio" />
        <meta property="og:url" content="https://istmanibharathi.me" />
        <meta property="og:image" content={favicon} />
        <meta property="og:site_name" content="KiKO" />
        <meta property="og:image:secure_url" content={favicon} />
        <meta property="og:image:type" content="image/svg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="keywords" content="Manibharathi, Kiko, itsmanibharathi, erode, Portfolio, Developer, DevOps, Engineer" />  

      </Helmet>
      <Navbar />
      <Hero />
      <Hireme />
      <Journey />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

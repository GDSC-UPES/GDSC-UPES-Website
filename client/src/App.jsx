import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Import your pages or components for each route
import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/team" component={Team} />
        <Route path="/contact" component={Contact} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

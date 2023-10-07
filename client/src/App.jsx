import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home"
import Events from "./pages/Events"
import Team from "./pages/Team"
import Contact from "./pages/Contact"


import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {

      return (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/events" Component={Events} />
            <Route path="/team" Component={Team } />
            <Route path="/contact" Component={Contact} />
          </Routes>
          <Footer />
        </Router>
      );

}

export default App;

import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";

// Import your pages or components for each route
import Home from "./pages/Home";
import Events from "./components/Events/Event.jsx";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
      return (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      );
}

export default App;

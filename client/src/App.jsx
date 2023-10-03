import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";

import Home from "./pages/Home"
import Events from "./pages/Events"
import Team from "./pages/Team"
import Contact from "./pages/Contact"
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="/events" element={<Events/>} />
              <Route path="/team" element={<Team/>} />
              <Route path="/contact" element={<Contact/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

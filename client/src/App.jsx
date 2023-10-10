import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Import your pages or components for each route
import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import "./App.css";
function App() {
  const[isloading,setIsLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },1000)
  },[]);
  return (
    <Router>
      <Navbar />
      {isloading ? (
         <div className="loading">
          <svg viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="black"
              strokeWidth="10"
              strokeDasharray="150"
              strokeDashoffset="150"
              fill="none"
            >
               <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      ) : (
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/events" component={Events} />
          <Route path="/team" component={Team} />
          <Route path="/contact" component={Contact} />
        </Routes>
      )}
      <Footer />
    </Router>
  );

}

export default App;

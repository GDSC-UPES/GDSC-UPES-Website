import React from 'react'
import Intro from "./Intro";
import About from "./About";
import Goals from "./Goals";
import Blogs from "./Blogs"
import QnA from "./Qna"

function Home() {
  return (
    <div>
    <Intro />
    <About />
    <Goals/>
    <Blogs/>
    <QnA/>
  </div>
  )
}

export default Home
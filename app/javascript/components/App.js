import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Greeting from "./Greeting";

class App extends React.Component {
  render () {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={ ("Home!")} />
          <Route exact path="/greeting" element={ <Greeting greeting="Friend" />} />
        </Routes>
      </Router>
    );
  }
}

export default App

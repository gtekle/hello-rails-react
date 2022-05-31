import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Greeting from "./Greeting";
import { Provider } from "react-redux"
import configureStore from './../configureStore'

const store = configureStore()

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={ ("Home!")} />
            <Route exact path="/greeting" element={ <Greeting greeting="Friend" />} />
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App

import React from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types"

const GET_GREETING_REQUEST = "GET_GREETING_REQUEST";
const GET_GREETING_SUCCESS = "GET_GREETING_SUCCESS";

function getGreeting () {
  console.log("getGreeting() actions!!")
  return dispatch => {
    dispatch({ type: GET_GREETING_REQUEST })
    return fetch('api/v1/greetings.json')
    .then(response => response.json())
    .then(json => dispatch(getGreetingSuccess(json)))
    .catch(error => console.log(error))
  }
}

function getGreetingSuccess(json){
  return {
    type: GET_GREETING_SUCCESS,
    json
  }
}

class Greeting extends React.Component { 
  componentDidMount() {
    this.props.getGreeting();
  }

  render () {
    const { greeting } = this.props;
    return (
      <React.Fragment>
        <div>
          <button className="getThingsBtn" onClick={() => this.props.getGreeting()}>Fetch Greeting </button>
          <p>{ greeting }</p>
        </div>
      </React.Fragment>
    );
  }
}

Greeting.propTypes = {
  greeting: PropTypes.string
};

const structuredSelector = createStructuredSelector({
  greeting: state => state.greeting,
});

const mapDispatchToPorps = { getGreeting };

export default connect(structuredSelector, mapDispatchToPorps)(Greeting);
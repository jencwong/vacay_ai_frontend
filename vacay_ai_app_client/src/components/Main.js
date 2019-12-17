// placeholder for the original App.js and pair with Survey.js

import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import axios from "axios";
// import Aside from './components/Aside.js'
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import Nav from "./components/Nav.js";
import Survey from "./components/Survey.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      survey: {},
      apiIsLoaded: false
    };
    this.callAPI = this.callAPI.bind(this);
  }

  // displayQuestion (){
  //   let currentSurveyQuestion = survey.
  // }

  componentDidMount() {
    this.callAPI();
  }

  async callAPI() {
    try {
      const request = await axios.get("/surveys");
      console.log("got", request);
      const surveyData = request.data;
      this.setState({
        survey: surveyData,
        apiIsLoaded: true
      });
    } catch (err) {
      console.log("ERROR: ", err);
    }
  }

  render() {
    const { survey, apiIsLoaded } = this.state;
    const renderSurvey = apiIsLoaded ? (
      <h1>
        <Survey survey={survey} />
      </h1>
    ) : (
      <h1>Loading...</h1>
    );
    return (
      <div className="App">
        <h1>
          Welcome to Vacay Ai, I will guide you to find your next vacation
          destination!
        </h1>
        {!this.state.apiIsLoaded
          ? this.showWelcomeText()
          : this.displayQuestion()}
        {!this.state.apiIsLoaded ? this.showNavigationButtons() : null}

        {/* {renderSurvey} */}
        {/* <h1>Hello</h1>
        <h2>Let's Take This Survey</h2> */}
      </div>
    );
  }
}

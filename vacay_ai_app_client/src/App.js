import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./App.css";
import About from "./components/About.js";
import Questionnaire from "./components/Questionnaire.js";
import Profile from "./components/Profile.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Logout from "./components/Logout.js";
import "bulma/css/bulma.css";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    };
  }
  componentDidMount() {
    var loginPage = [];
    loginPage.push(<Home appContext={this} key={"login-screen"} />);
    this.setState({
      loginPage: loginPage
    });
    document.addEventListener("DOMContentLoaded", () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
          el.addEventListener("click", () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
          });
        });
      }
    });
  }

  render() {
    return (
      <Router>
        {/* <div className="container"> */}
        {/* <div classNameName="App-header">
            <img
              src="https://i.imgur.com/25gKmFc.png"
              classNameName="App-logo"
              alt="logo"
            /> */}
        <div className="App">
          <header>
            <img className="App-logo" src="https://i.imgur.com/25gKmFc.png" />
          </header>
          <nav
            className="navbar-menu is-active"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <a
                role="button"
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">
                  <Link to="/">Home</Link>
                </a>
                <a className="navbar-item">
                  <Link to="/about">About</Link>
                </a>
                <a className="navbar-item">
                  <Link to="/questionnaire">Questionnaire</Link>
                </a>
                <a className="navbar-item">
                  <Link to="/profile">Profile</Link>
                </a>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <a className="button is-danger is-outlined">
                    <Link to="/logout">Logout</Link>
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* <div className="home">
            {this.state.loginPage}
            {this.state.uploadScreen}
          </div> */}
          {/* </header> */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/questionnaire" component={Questionnaire} />
          <Route path="/profile" component={Profile} />
          <Route path="/logout" component={Logout} />
          {/* </div> */}
          <footer className="footer">
            <small>
              &copy; Copyright 2019, Jennie Wong, All Rights Reserved
            </small>
          </footer>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);

// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import quizQuestions from "./api/quizQuestions";
// import Quiz from "./components/Quiz";
// import Result from "./components/Result";
// // import logo from "./svg/logo.svg";
// import "./App.css";

// className App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 0,
//       questionId: 1,
//       question: "",
//       answerOptions: [],
//       answer: "",
//       answersCount: {},
//       ans_combination: [],
//       result: ""
//     };

//     this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
//   }

//   componentDidMount() {
//     const shuffledAnswerOptions = quizQuestions.map(question =>
//       this.shuffleArray(question.answers)
//     );
//     this.setState({
//       question: quizQuestions[0].question,
//       answerOptions: shuffledAnswerOptions[0]
//     });
//   }

//   shuffleArray(array) {
//     var currentIndex = array.length,
//       temporaryValue,
//       randomIndex;

//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;

//       // And swap it with the current element.
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }

//     return array;
//   }

//   handleAnswerSelected(event) {
//     this.setUserAnswer(event.currentTarget.value);
//     this.setAnsCombination(event.currentTarget.value);

//     if (this.state.questionId < quizQuestions.length) {
//       setTimeout(() => this.setNextQuestion(), 300);
//     } else {
//       setTimeout(() => this.setResults(this.getResults()), 300);
//     }
//   }

//   setUserAnswer(answer) {
//     this.setState((state, props) => ({
//       answersCount: {
//         ...state.answersCount,
//         [answer]: (state.answersCount[answer] || 0) + 1
//       },
//       answer: answer
//     }));
//     return answer;
//   }

//   setAnsCombination(answer) {
//     this.setState(prevState => ({
//       ans_combination: [...prevState.ans_combination, answer]
//     }));
//   }

//   setNextQuestion() {
//     const counter = this.state.counter + 1;
//     const questionId = this.state.questionId + 1;

//     this.setState({
//       counter: counter,
//       questionId: questionId,
//       question: quizQuestions[counter].question,
//       answerOptions: quizQuestions[counter].answers,
//       answer: ""
//     });
//   }

//   getResults() {
//     const ans_combination = this.state.ans_combination;
//     const answersCount = this.state.answersCount;
//     console.log(answersCount);
//     console.log(ans_combination);
//     const answersCountKeys = Object.keys(answersCount).join("");
//     // const answersCountValues = answersCountKeys.map(key => answersCount[key]);
//     // const maxAnswerCount = Math.max.apply(null, answersCountValues);
//     console.log(answersCountKeys);
//     return ans_combination;

//     // return answersCountKeys;

//     // return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
//   }

//   setResults(result) {
//     this.setState({ result: result });
//     // if (result.length === 1) {
//     //   this.setState({ result: result[0] });
//     // } else {
//     //   this.setState({ result: "Undetermined" });
//     // }
//   }

//   renderQuiz() {
//     return (
//       <Quiz
//         answer={this.state.answer}
//         answerOptions={this.state.answerOptions}
//         questionId={this.state.questionId}
//         question={this.state.question}
//         questionTotal={quizQuestions.length}
//         onAnswerSelected={this.handleAnswerSelected}
//       />
//     );
//   }

//   renderResult() {
//     return <Result quizResult={this.state.result} />;
//   }

//   render() {
//     return (
//       <div classNameName="App">
//         <div classNameName="App-header">
//           <img
//             src="https://i.imgur.com/25gKmFc.png"
//             classNameName="App-logo"
//             alt="logo"
//           />
//           <div classNameName="Title">
//             <h2>Vacay Ai's Questionnaire</h2>
//           </div>
//         </div>
//         {this.state.result ? this.renderResult() : this.renderQuiz()}
//       </div>
//     );
//   }

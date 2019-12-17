import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import quizQuestions from "../api/quizQuestions";
import Quiz from "./Quiz";
import Result from "./Result";
// import logo from "./svg/logo.svg";
import "../App.css";
import axios from "axios";

class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      ans_combination: [],
      result: "",
      matches: []
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    this.setAnsCombination(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
    return answer;
  }

  setAnsCombination(answer) {
    this.setState(prevState => ({
      ans_combination: [...prevState.ans_combination, answer]
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ""
    });
  }

  getResults() {
    const ans_combination = this.state.ans_combination;
    const answersCount = this.state.answersCount;
    console.log(answersCount);
    console.log(ans_combination);
    const answersCountKeys = Object.keys(answersCount).join("");
    // const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    // const maxAnswerCount = Math.max.apply(null, answersCountValues);
    console.log(answersCountKeys);
    return ans_combination;

    // return answersCountKeys;

    // return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  async setResults(result) {
    this.setState({ result: result });

    try {
      const request = await axios.get(
        `/checkmatch/${this.state.ans_combination.join("")}`
      );
      console.log("got", request);
      const matches = request.data;
      this.setState({
        matches: matches
      });
    } catch (err) {
      console.log("ERROR: ", err);
    }

    // if (result.length === 1) {
    //   this.setState({ result: result[0] });
    // } else {
    //   this.setState({ result: "Undetermined" });
    // }
  }

  renderQuiz() {
    return (
      <div className="Title">
        <h2>
          <strong>Vacay Ai's Questionnaire</strong>
        </h2>
        <Quiz
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
      </div>
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} matches={this.state.matches} />
    );
  }

  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img
            src="https://i.imgur.com/25gKmFc.png"
            className="App-logo"
            alt="logo"
          /> */}

        {/* </div> */}
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

// import React from "react";
// import PropTypes from "prop-types";
// import Question from "../components/Question";
// import QuestionCount from "../components/QuestionCount";
// import AnswerOption from "../components/AnswerOption";

// function Questionnaire(props) {
//   function renderAnswerOptions(key) {
//     return (
//       <AnswerOption
//         key={key.content}
//         answerContent={key.content}
//         answerType={key.type}
//         answer={props.answer}
//         questionId={props.questionId}
//         onAnswerSelected={props.onAnswerSelected}
//       />
//     );
//   }
//   return (
//     <div key={props.questionId}>
//       <QuestionCount counter={props.questionId} total={props.questionTotal} />
//       <Question content={props.question} />
//       <ul className="answerOptions">
//         {props.answerOptions.map(renderAnswerOptions)}
//       </ul>
//     </div>
//   );
// }

// Questionnaire.propTypes = {
//   answer: PropTypes.string.isRequired,
//   answerOptions: PropTypes.array.isRequired,
//   counter: PropTypes.number.isRequired,
//   question: PropTypes.string.isRequired,
//   questionId: PropTypes.number.isRequired,
//   questionTotal: PropTypes.number.isRequired,
//   onAnswerSelected: PropTypes.func.isRequired
// };

export default Questionnaire;

import React, { Component } from "react";
import axios from "axios";

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      apiIsLoaded: false
    };
    this.callAPI = this.callAPI.bind(this);
  }
  componentDidMount() {
    this.callAPI();
  }

  async callAPI() {
    try {
      const request = await axios.get("/users/:id");
      console.log("got", request);
      const userData = request.data;
      this.setState({
        user: userData,
        apiIsLoaded: true
      });
    } catch (err) {
      console.log("ERROR: ", err);
    }
  }

  render() {
    return (
      <>
        <h1>Survey</h1>

        {this.props.survey.map(question => {
          return (
            <div>
              <h3>Question: {question.question}</h3>
              <form>
                <div className="control">
                  <label className="radio">
                    <input type="radio" name="answer" value="option_1" />
                    {question.option_1}
                  </label>
                  <label className="radio">
                    <input type="radio" name="answer" />
                    {question.option_2}
                  </label>
                  <label className="radio">
                    <input type="radio" name="answer" />
                    {question.option_3}
                  </label>
                  {"\n"}
                  <button>Submit!</button>
                </div>

                {/* <label className="checkbox">
                <input type="checkbox" /> {question.option_1}
              </label>
              <label className="checkbox">
                <input type="checkbox" /> {question.option_2}
              </label>
              <label className="checkbox">
                <input type="checkbox" /> {question.option_3}
              </label> */}
              </form>
            </div>
          );
        })}
      </>
    );
  }
}

export default Survey;

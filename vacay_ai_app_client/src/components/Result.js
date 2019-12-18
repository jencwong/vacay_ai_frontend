import React, { useState } from "react";
// import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";
import { Redirect } from "react-router-dom";

function Result(props) {
  const [toQuestionnaire, setQuestionnaire] = useState(false);
  if (toQuestionnaire) {
    return <Redirect to="/questionnaire" />;
  }
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        {/* Your answer combination is{" "}
        <strong>
          {props.quizResult}
          <br />
        </strong> */}
        <h1 id="resultHeadline">
          <strong>Here are your matching destinations: </strong>
        </h1>
        <div className="mainDiv">
          <div className="childDiv">
            {props.matches.map(destination => {
              return (
                <div className="mainHolder">
                  <h2>
                    {destination.name}, {destination.state}
                  </h2>
                  <div className="picHolder">
                    <img src={destination.image}></img>
                  </div>
                  <div className="attractions">
                    <p>List of Attractions:</p>
                    <li>{destination.attractions}</li>
                  </div>
                  <div className="buttons is-centered">
                    <button className="button is-success is-normal is-hovered">
                      Favorite
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </CSSTransitionGroup>
  );
}

// Result.propTypes = {
//   quizResult: PropTypes.string.isRequired
// };

export default Result;

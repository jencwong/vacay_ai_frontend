import React from "react";
// import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";

function Result(props) {
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
        <h1>
          <strong>Here is your matching destinations: </strong>
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

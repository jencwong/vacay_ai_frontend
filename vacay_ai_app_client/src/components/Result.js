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
        <p>
          Here is your matching destinations:
          {props.matches.map(destination => {
            return (
              <>
                <h2>{destination.name}</h2>
                <img src={destination.image}></img>
              </>
            );
          })}
        </p>
      </div>
    </CSSTransitionGroup>
  );
}

// Result.propTypes = {
//   quizResult: PropTypes.string.isRequired
// };

export default Result;

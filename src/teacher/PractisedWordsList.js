import { Fragment } from "react";
import { AttemptIcons } from "./AttemptIcons";
import { v4 as uuid } from "uuid";
import { shortFormatedDate } from "./FormatedDate";
import ExerciseType from "./ExerciseType";

const PractisedWordsList = ({ words }) => {
  return (
    <Fragment>
      {words.length===0 && <p style={{fontSize:"medium"}}>The student has not practised any words yet. STRINGS</p>}
      {words && words.map((word) => (
        <div key={word + uuid()}>
            <div
              key={uuid()}
              style={{
                borderLeft: "solid 3px #5492b3",
                marginBottom: "38px",
                minWidth: 325,
                userSelect: "none",
              }}
            >
              <p
                style={{
                  color: "#44cdff",
                  marginBottom: "-15px",
                  marginTop: "0px",
                  marginLeft: "1em",
                }}
              >
                {word.translation.toLowerCase()}
              </p>
              <p style={{ marginLeft: "1em", marginBottom: "-5px" }}>
                <b>{word.word}</b>
              </p>

              {word.exerciseAttempts.map((exercise) => (
                <div
                  key={uuid()}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "1em",
                    fontSize: "small",
                    marginBottom: "-25px",
                  }}
                >
                  <p style={{ color: "#808080" }}>{shortFormatedDate(exercise.time)}</p>
                  <ExerciseType source={exercise.source}/>
                  <AttemptIcons
                    attemptString={exercise.outcome}
                  />
                </div>
              ))}
            </div>
        </div>
      ))}
    </Fragment>
  );
};
export default PractisedWordsList;

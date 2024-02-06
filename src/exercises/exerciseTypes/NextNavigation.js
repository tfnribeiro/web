import strings from "../../i18n/definitions";
import SpeakButton from "./SpeakButton";
import EditButton from "../../words/EditButton";
import * as s from "./Exercise.sc";
import SolutionFeedbackLinks from "./SolutionFeedbackLinks";
import { random } from "../../utils/basic/arrays";
import { useState } from "react";

export default function NextNavigation({
  message,
  bookmarksToStudy,
  moveToNextExercise,
  api,
  reload,
  setReload,
  isReadContext,
  toggleShow,
  isCorrect,
  handleShowSolution,
}) {
  const bookmarkToStudy = bookmarksToStudy[0];
  const exercise = "exercise";
  let incorrectAttemptsCount = 0;
  for (let i = 0; i < message.length; i++) {
    if (message[i] != "C") {
      incorrectAttemptsCount++;
    }
  }
  
  
  // Load the images in the cache.
  const arraySrcs=["/static/icons/zeeguu-icon-correct.png","/static/icons/zeeguu-icon-solution.png"];
  const correctStrings = [strings.correctExercise1, strings.correctExercise2, strings.correctExercise3];
  const solutionStrings = [strings.solutionExercise1, strings.solutionExercise2];
  const correctMessage = useState(random(correctStrings));
  const solutionMessage =  useState(random(solutionStrings));

  return (
    <>
      {arraySrcs.map((e) => (
        <img src={e} style={{ display: "none" }} />
      ))}
      {isCorrect ? (
        (incorrectAttemptsCount < message.length ) ? (
          <div>
            <img
              src={"/static/icons/zeeguu-icon-correct.png"}
              style={{ width: "60px", mixBlendMode: "multiply", height: "auto", marginTop:"1em"}}
              alt="Correct Icon"
            />
            <p><b>{correctMessage}</b></p>
          </div>
        ) : (
          <div>
            <img
              src={"/static/icons/zeeguu-icon-solution.png"}
              style={{ width: "60px", mixBlendMode: "multiply", height: "auto", marginTop:"1em"}}
              alt="Solution Icon"
            />
            <p><b>{solutionMessage}</b></p>
          </div>
        )
      ) : (
        <> </>
      )}
      <s.BottomRowSmallTopMargin className="bottomRow">
        {isCorrect && bookmarksToStudy.length === 1 && (
          <s.EditSpeakButtonHolder>
            <SpeakButton
              bookmarkToStudy={bookmarkToStudy}
              api={api}
              style="next"
              isReadContext={isReadContext}
            />
            <EditButton
              bookmark={bookmarksToStudy[0]}
              api={api}
              styling={exercise}
              reload={reload}
              setReload={setReload}
            />
          </s.EditSpeakButtonHolder>
        )}
        {isCorrect && (
          <s.FeedbackButton
            onClick={(e) => moveToNextExercise()}
            autoFocus
          >
            {strings.next}
          </s.FeedbackButton>
        )}
      </s.BottomRowSmallTopMargin>
      <SolutionFeedbackLinks
        handleShowSolution={handleShowSolution}
        toggleShow={toggleShow}
        isCorrect={isCorrect}
      />
    </>
  );
}

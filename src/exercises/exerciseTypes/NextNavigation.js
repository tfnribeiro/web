import strings from "../../i18n/definitions";
import SpeakButton from "./SpeakButton";
import EditButton from "../../words/EditButton";
import * as s from "./Exercise.sc";
import SolutionFeedbackLinks from "./SolutionFeedbackLinks";

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
  console.log("This is what I got!");
  console.log(message);
  console.log(bookmarksToStudy);
  const bookmarkToStudy = bookmarksToStudy[0];
  const exercise = "exercise";
  let incorrectAttemptsCount = 0;
  for (let i = 0; i < message.length; i++) {
    if (message[i] != "C") {
      incorrectAttemptsCount++;
    }
  }

  // <s.BottomRowSmallTopMargin>
  //   {incorrectAttemptsCount === 0 ? (
  //    <p>✅ Correct!</p>
  //  ) : (
  //    <p>⚠ Next time, for sure!</p>
  //  )}
  //</s.BottomRowSmallTopMargin>
  return (
    <>
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
            style={
              incorrectAttemptsCount === 0
                ? {
                    backgroundColor: "green",
                    width: "4em",
                    height: "2.5em",
                  }
                : {
                    width: "4em",
                    height: "2.5em",
                  }
            }
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

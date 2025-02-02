import Word from "../words/Word";
import * as s from "../reader/ArticleReader.sc";
import strings from "../i18n/definitions";
import {useState, useEffect} from "react";
import {CenteredColumn} from "./Congratulations.sc";
import {removeArrayDuplicates} from "../utils/basic/arrays";
import {LoadingAnimation} from "../components/LoadingAnimation.sc";
import LocalStorage from "../assorted/LocalStorage";
import { StyledButton } from "../components/allButtons.sc.js"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {CenteredContent} from "../components/ColumnWidth.sc";

export default function Congratulations({
                                            articleID,
                                            correctBookmarks,
                                            incorrectBookmarks,
                                            api,
                                            backButtonAction,
                                            keepExercisingAction,
                                            source,
                                            totalTime,
                                            exerciseSessionId
                                        }) {
    const [correctBookmarksToDisplay, setCorrectBookmarksToDisplay] = useState(
        removeArrayDuplicates(correctBookmarks)
    );
    const [incorrectBookmarksToDisplay, setIncorrectBookmarksToDisplay] =
        useState(removeArrayDuplicates(incorrectBookmarks));

    const [username, setUsername] = useState();


    function deleteBookmark(bookmark) {
        setCorrectBookmarksToDisplay(
            correctBookmarksToDisplay.filter((e) => e.id !== bookmark.id)
        );
        setIncorrectBookmarksToDisplay(
            incorrectBookmarksToDisplay.filter((e) => e.id !== bookmark.id)
        );
    }

    useEffect(() => {
        let userInfo = LocalStorage.userInfo()
        let name = userInfo.name
        setUsername(name);
        api.reportExerciseSessionEnd(exerciseSessionId, totalTime);
    }, []);

    if (username === undefined) {
        return <LoadingAnimation/>;
    }

    return (
        <>
            <s.NarrowColumn className="narrowColumn">
                <br/>
                <CenteredColumn className="centeredColumn">
                    <h1>
                        {strings.goodJob} {username}!
                    </h1>
                </CenteredColumn>
                <div style={{fontSize: "small"}}>
                    This exercise session took {totalTime} seconds
                </div>

                {correctBookmarksToDisplay.length > 0 && (
                    <>
                        <h3>😊 {strings.correct}</h3>
                        <div>
                            {correctBookmarksToDisplay.map((each) => (
                                <s.ContentOnRow className="contentOnRow" key={"row_" + each.id}>
                                    <Word
                                        key={each.id}
                                        bookmark={each}
                                        notifyDelete={deleteBookmark}
                                        api={api}
                                        source={source}
                                    />
                                </s.ContentOnRow>
                            ))}
                        </div>
                    </>
                )}

                {incorrectBookmarksToDisplay.length > 0 && (
                    <>
                        <h3>
                            <br/>
                            😳 {strings.payMoreAttentionTo}
                        </h3>
                        <p>
                            {incorrectBookmarksToDisplay.map((each) => (
                                <s.ContentOnRow className="contentOnRow" key={"row_" + each.id}>
                                    <Word
                                        key={each.id}
                                        bookmark={each}
                                        notifyDelete={deleteBookmark}
                                        api={api}
                                        source={source}
                                    />
                                </s.ContentOnRow>
                            ))}
                        </p>
                    </>
                )}
                <CenteredContent>
                    <StyledButton secondary className="whiteButton" onClick={backButtonAction}>
                        {<NavigateBeforeIcon/>}{strings.backToReading}
                    </StyledButton>
                    <StyledButton primary onClick={keepExercisingAction}>
                        {strings.keepExercising}{<NavigateNextIcon/>}
                    </StyledButton>
                </CenteredContent>
            </s.NarrowColumn>
        </>
    );
}
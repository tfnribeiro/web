import strings from "../i18n/definitions";
import TutorialItemCard from "./TutorialItemCard";
import * as s from "../components/ColumnWidth.sc";
import * as sc from "../components/TopTabs.sc";
import * as scs from "./TutorialItemCard.sc";
import { setTitle } from "../assorted/setTitle";

export default function Tutorials() {
  setTitle(strings.tutorials);
  return (
    <s.NarrowColumn>
      <scs.StyledTutorialItemCard>
        <sc.TopTabs>
          <h1>{strings.tutorials}</h1>
        </sc.TopTabs>
        <p>{strings.howToAddAndEditClass}</p>
        <TutorialItemCard embedId="UUJ5Ezjs1KY" />
        <p>{strings.howToDeleteClass}</p>
        <TutorialItemCard embedId="2Kf95KT5Bqw" />
        <p>{strings.howToAddStudent}</p>
        <TutorialItemCard embedId="UA44KiW1qXg" />
        <p>{strings.howToDeleteStudents}</p>
        <TutorialItemCard embedId="J9Y3Ar5CI-s" />
        <p>{strings.howToAddTextFromZeeguu} </p>
        <TutorialItemCard embedId="nr8a0k_pSIo" />
        <p>{strings.howToAddTextCopyPaste} </p>
        <TutorialItemCard embedId="_4lmQsEqWXg" />
        <p>{strings.howToAddTextUrl}</p>
        <TutorialItemCard embedId="jjMVwT1CtXc" />
        <p>{strings.howToEditAndDeleteText}</p>
        <TutorialItemCard embedId="uFGRHgIZhRc" />
        <p>{strings.howToShareText}</p>
        <TutorialItemCard embedId="Dsrl7kxmQM4" />
        <p>{strings.howToExplainZeeguuData}</p>
        <TutorialItemCard embedId="" />
        <p>{strings.howToUnderstandTextLevel}</p>
        <TutorialItemCard embedId="B7CVsGhRWfM" />
      </scs.StyledTutorialItemCard>
    </s.NarrowColumn>
  );
}

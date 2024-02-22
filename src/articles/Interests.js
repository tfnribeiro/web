import TagsOfInterests from "./TagsOfInterests";
import TagsOfFilters from "./TagsOfFilters";
import { useState } from "react";

import * as s from "./Interests.sc";
import * as b from "../components/allButtons.sc";
import strings from "../i18n/definitions";

export default function InterestsAndSearch({ api, articlesListShouldChange }) {
  const [showingInterests, setShowingInterests] = useState(false);
  const [showingFilters, setShowingFilters] = useState(false);

  function toggleInterests() {
    if (showingFilters) {
      return;
    }
    setShowingInterests(!showingInterests);
  }

  function toggleFilters() {
    if (showingInterests) {
      return;
    }
    setShowingFilters(!showingFilters);
  }

  function closeTagsOfInterestAndNotifyArticleListOfChange() {
    articlesListShouldChange();
    toggleInterests();
  }

  return (
    <s.Interests>
      <b.OrangeRoundButton onClick={(e) => toggleInterests()}>
        {strings.interests}
      </b.OrangeRoundButton>

      <b.OrangeRoundButton onClick={(e) => toggleFilters()}>
        {strings.nonInterests}
      </b.OrangeRoundButton>

      <TagsOfInterests
        visible={showingInterests}
        api={api}
        articlesListShouldChange={
          closeTagsOfInterestAndNotifyArticleListOfChange
        }
      />
      <TagsOfFilters
        visible={showingFilters}
        api={api}
        articlesListShouldChange={
          closeTagsOfInterestAndNotifyArticleListOfChange
        }
      />
    </s.Interests>
  );
}

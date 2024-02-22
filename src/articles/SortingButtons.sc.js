import styled, { css } from "styled-components";
import * as b from "../components/allButtons.sc";
import { almostBlack, veryLightGrey } from "../components/colors";

const SortingButtons = styled.div`
  margin-bottom: 1em;
  margin-left: 1em;
  display: flex;
  justify-content: flex-end;
  font-size: medium;

  .sort-by {
    padding-top: 0.3em;
  }

  ${(props) =>
    props.isOnTeacherSite &&
    css`
      margin-right: 13.7em;
    `}

  .descending::after {
    content: "↑";
  }

  .ascending::after {
    content: "↓";
  }

  @media (min-width: 768px) {
    margin-bottom: 3em;
  }
`;

const SortButton = styled(b.RoundButton)`
  padding-left: 0.3em;
  padding-right: 0.3em;
  padding-top: 0.1em;
  padding-bottom: 0.1em;
  padding: 0.15em 0.35em;

  font-size: small;
  background-color: ${veryLightGrey};
  color: ${almostBlack} !important;

  ${(props) =>
    props.isOnTeacherSite &&
    css`
      margin-left: 2vw;
      font-size: medium;
    `}
`;

export { SortingButtons, SortButton };

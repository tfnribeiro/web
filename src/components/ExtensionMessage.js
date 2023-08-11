import Modal from "@mui/material/Modal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import * as s from "./ExtensionMessage.sc";
import Feature from "../features/Feature";
import LocalStorage from "../assorted/LocalStorage";
import strings from "../i18n/definitions";

export default function ExtensionMessage({
  open,
  hasExtension,
  displayedExtensionPopup,
  setDisplayedExtensionPopup,
  setExtensionMessageOpen,
}) {
  function handleClose() {
    setExtensionMessageOpen(false);
    setDisplayedExtensionPopup(true);
    LocalStorage.setDisplayedExtensionPopup(true);
  }

  if (
    !hasExtension &&
    Feature.extension_experiment1() &&
    !displayedExtensionPopup
  ) {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <s.ExtensionMessageModalWrapper>
          <s.CloseButton role="button" onClick={handleClose}>
            <CloseRoundedIcon fontSize="medium" />
          </s.CloseButton>
          <h1>
            <span className="newAnnotation">New!</span>&nbsp;
            {strings.extensionHeadline}
          </h1>
          <p>
            To read not saved articles recommended by Zeeguu or external
            articles, you need to install The Zeeguu Reader browser extension.
          </p>
          <img
            src={"../static/images/find-extension.png"}
            //TODO: Add new alt description
            alt="Zeeguu browser extension"
          />
          <s.Footer>
            <a
              className="install-links"
              href="https://chrome.google.com/webstore/detail/zeeguu/ckncjmaednfephhbpeookmknhmjjodcd"
              rel="noopener noreferrer"
            >
              <FileDownloadOutlinedIcon fontSize="small" />
              {strings.extensionChromeInstall}
            </a>
            <a
              className="install-links"
              href="https://addons.mozilla.org/en-US/firefox/addon/the-zeeguu-reader/"
              rel="noopener noreferrer"
            >
              <FileDownloadOutlinedIcon fontSize="small" />
              {strings.extensionFirefoxInstall}
            </a>
          </s.Footer>
        </s.ExtensionMessageModalWrapper>
      </Modal>
    );
  } else return null;
}

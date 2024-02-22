import { Zeeguu_API } from "./classDef";
import qs from "qs";

Zeeguu_API.prototype.readingSessionCreate = function (articleId, callback) {
  // the API expects the article_id to be an integer
  const after_extracting_json = function (json) {
    let id = JSON.parse(json).id;
    callback(id);
  };

  this._post(
    `reading_session_start`,
    qs.stringify({ article_id: articleId }),
    after_extracting_json,
  );
};

Zeeguu_API.prototype.readingSessionUpdate = function (
  readingSessionId,
  currentDuration,
) {
  let payload = {
    id: readingSessionId,
    duration: currentDuration * 1000, //the API expects ms
  };

  this._post(`reading_session_update`, qs.stringify(payload));
};

Zeeguu_API.prototype.readingSessionEnd = function (
  readingSessionId,
  totalTime,
) {
  let payload = {
    id: readingSessionId,
    duration: totalTime * 1000,
  };

  this._post(`reading_session_start`, qs.stringify(payload));
};

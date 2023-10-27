import {Zeeguu_API} from "./classDef";
import qs from "qs";


Zeeguu_API.prototype.startExerciseSession = function (callback) {

    this._post(`start_new_exercise_session`, null, callback);
};

Zeeguu_API.prototype.updateExerciseSession = function (currentSessionId, currentDuration) {

    let payload = {
        id: currentSessionId,
        duration: currentDuration * 1000 //the API expects ms
    };

    this._post(`update_exercise_session`, qs.stringify(payload));
};

Zeeguu_API.prototype.reportExerciseSessionEnd = function (exerciseSessionId, totalTime) {

    let payload = {
        id: exerciseSessionId,
        duration: totalTime * 1000
    };

    this._post(`report_exercise_session_end`, qs.stringify(payload));
};

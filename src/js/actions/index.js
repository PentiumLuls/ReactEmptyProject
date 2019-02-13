import {SAVE_USER_CODE} from "../constants/action-types";

export function saveUserCode(payload) {
    return {type: SAVE_USER_CODE, payload}
}
import {SAVE_USER_CODE, UNLOCK_NEXT_LEVEL_STATE} from "../constants/action-types";

export function saveUserCode(payload) {
    return {type: SAVE_USER_CODE, payload}
}

export function unlockNextLevelState(payload) {
    return {type: UNLOCK_NEXT_LEVEL_STATE, payload}
}
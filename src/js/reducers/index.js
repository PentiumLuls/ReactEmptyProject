import {SAVE_USER_CODE} from "../constants/action-types";

if (!localStorage["passLevels"]) {
    localStorage["passLevels"] = 0;
}
if (!localStorage["currentLevel"]) {
    localStorage["currentLevel"] = 0;
}

const initialState = {
    userCode: "",
    passLevels: +localStorage.passLevels,
    currentLevel: +localStorage.currentLevel,
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_USER_CODE: {
            return Object.assign({}, state, {
                userCode: action.payload
            });
        }

        default:
            return state;
    }
}

export default rootReducer;
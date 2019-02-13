import {SAVE_USER_CODE, UNLOCK_NEXT_LEVEL_STATE} from "../constants/action-types";
import {levels} from "../../levels/levels";

if (!localStorage["passLevels"]) {
    localStorage["passLevels"] = 0;
}
if (!localStorage["currentLevel"]) {
    localStorage["currentLevel"] = 0;
}
if (!localStorage["passStages"]) {
    localStorage["passStages"] = 0;
}
if (!localStorage["currentStage"]) {
    localStorage["currentStage"] = 0;
}

const initialState = {
    userCode: "",
    passLevels: +localStorage.passLevels,
    currentLevel: +localStorage.currentLevel,
    passStages: +localStorage.passStages,
    currentStage: +localStorage.currentStage,
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_USER_CODE: {
            return Object.assign({}, state, {
                userCode: action.payload
            });
        }

        case UNLOCK_NEXT_LEVEL_STATE: {
            if (state.currentStage == state.passStages && state.currentLevel == state.passLevels) {
                //LAST LEVEL COMPLETED
                if (state.currentLevel == levels[state.currentStage].length - 1) {
                    //NEXT STAGE
                    localStorage.passStages = state.currentStage + 1;
                    localStorage.passLevels = 0;
                    return {
                        ...state,
                        passStages: state.currentStage + 1,
                        passLevels: 0,
                    }
                } else {
                    //NEXT LEVEL IN CURRENT STAGE
                    localStorage.passLevels = state.currentLevel + 1;
                    return {...state, passLevels: state.currentLevel + 1}
                }
            }
            //ALREADY PASSED QUEST
            return state;
        }

        default:
            return state;
    }
}

export default rootReducer;
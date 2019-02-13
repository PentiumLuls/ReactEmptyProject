import {SAVE_USER_CODE} from "../constants/action-types";

const initialState = {
    userCode: ""
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
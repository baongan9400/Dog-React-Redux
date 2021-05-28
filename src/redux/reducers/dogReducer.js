import { ActionTypes } from "../constants/action-types"

const initialState = {
    dogs: [],
};
export const dogReducer = (state = initialState, { type, payload }) => { //{type, payload} :action destructuring
    switch (type) {
        case ActionTypes.SET_DOGS:
            return { ...state, dogs: payload }
        default:
            return state;
    }
};
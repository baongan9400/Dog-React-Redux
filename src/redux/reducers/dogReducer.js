import { ActionTypes } from "../constants/action-types"

const initialState = {
    dogs: [{
        id: 1,
        life_span: "10 - 12 years",
        name: "Affenpinscher",
        origin: "Germany, France",
        temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    }],
};
export const dogReducer = (state = initialState, {type, payload}) => { //{type, payload} : destructuring
    switch (type){
        case ActionTypes.SET_DOGS:
            return state;
        case ActionTypes.SELECTED_DOG:
            break;
        default:
            return state;
    }
}
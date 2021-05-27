import {ActionTypes} from "../constants/action-types"
export const setDogs = (dogs) => {
    return {
        type: ActionTypes.SET_DOGS,
        payload: dogs,
    };
};
export const selectedDogs = (dogs) => {
    return {
        type: ActionTypes.SET_DOGS,
        payload: dogs,
    };
};
export const removeDog = (dog) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_DOG,
        payload: dog,
    };
};
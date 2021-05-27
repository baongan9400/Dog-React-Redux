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
export const setDogs = (dog) => {
    return {
        type: ActionTypes.SELECTED_DOG,
        payload: dog,
    };
};
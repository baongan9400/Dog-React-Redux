import { ActionTypes } from "../constants/action-types"
export const setDogs = (dogs) => {
    return {
        type: ActionTypes.SET_DOGS,
        payload: dogs,
    };
};
export const selectedDog = (dog) => {
    return {
        type: ActionTypes.SELECTED_DOG,
        payload: dog,
    };
};
export const removeDog = (dog) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_DOG,
        payload: dog,
    };
};
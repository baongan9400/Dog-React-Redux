import {combineReducers} from 'redux';
import {dogReducer, selectedDogReducer} from './dogReducer';

const reducers = combineReducers({
    allDogs: dogReducer,
});
export default reducers;// Root reducer
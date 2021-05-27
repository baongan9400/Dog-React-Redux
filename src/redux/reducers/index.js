import {combineReducers} from 'redux';
import {dogReducer} from './dogReducer';

const reducers = combineReducers({
    allDogs: dogReducer
});
export default reducers;
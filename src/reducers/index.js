import { combineReducers } from 'redux';
import square from './squareReducer';
import my from './myReducer';

export default combineReducers({
    square,
    my,
});

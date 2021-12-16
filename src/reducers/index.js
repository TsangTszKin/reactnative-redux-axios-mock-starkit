import { combineReducers } from 'redux';
import square from './squareReducer';
import my from './myReducer';
import message from './messageReducer'

export default combineReducers({
    square,
    my,
    message,
});

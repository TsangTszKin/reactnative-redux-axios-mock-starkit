import {
    LOAD_CARD_LIST,
    UPDATE_CARD_LIST,
    UPDATE_BANNER,
} from '../actions/types';

const initState = {
    loading: false,
    cardList: [],
    banner: [],
}

export default (state = initState, action = {}) => {
    switch (action.type) {
        case LOAD_CARD_LIST:
            return { ...state, loading: true }
        case UPDATE_CARD_LIST:
            return { ...state, loading: false, cardList: action.cardList }
        case UPDATE_BANNER:
            return { ...state, loading: false, banner: action.banner }
        default:
            return state
    }
}

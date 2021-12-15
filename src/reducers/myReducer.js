import {
    LOAD_MY_CARD_LIST,
    UPDATE_MY_CARD_LIST,
} from '../actions/types';

const initState = {
    loading: false,
    cardList: [],
}

export default (state = initState, action = {}) => {
    console.log('my --- action', action)
    switch (action.type) {
        case LOAD_MY_CARD_LIST:
            return { ...state, loading: true }
        case UPDATE_MY_CARD_LIST:
            let { list } = action.data
            const cardList = list
            return { ...state, loading: false, cardList }
        default:
            return state
    }
}

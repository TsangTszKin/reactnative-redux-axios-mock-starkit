import {
    LOAD_MY_CARD_LIST,
    UPDATE_MY_CARD_LIST,
    LOAD_MY_SHOP,
    UPDATE_MY_SHOP,
} from '../actions/types';

const initState = {
    loading: false,
    cardList: [],
    shopList: [],
}

export default (state = initState, action = {}) => {
    console.log('my --- action', action)
    switch (action.type) {
        case LOAD_MY_CARD_LIST:
        case LOAD_MY_SHOP:
            return { ...state, loading: true }
        case UPDATE_MY_CARD_LIST:
            const cardList = action.data.list
            return { ...state, loading: false, cardList }
        case UPDATE_MY_SHOP:
            const shopList = action.data.list
            return { ...state, loading: false, shopList }
        default:
            return state
    }
}

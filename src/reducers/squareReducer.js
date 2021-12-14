import {
    LOAD_CARD_LIST,
    LOAD_BANNER,
    UPDATE_CARD_LIST,
    UPDATE_BANNER,
} from '../actions/types';

const initState = {
    loading: false,
    cardList: {
        dataSource: [],
        remoteTotal: 0,
        localTotal: 0
    },
    banner: [],
}

export default (state = initState, action = {}) => {
    console.log('---action', action)
    switch (action.type) {
        case LOAD_CARD_LIST:
        case LOAD_BANNER:
            return { ...state, loading: true }
        case UPDATE_CARD_LIST:
            let { total, list } = action.data
            const cardList = {
                dataSource: action.refresh ? list : [...state.cardList.dataSource, ...list],
                localTotal: action.refresh ? list.length : state.cardList.localTotal + list.length,
                remoteTotal: total,
            }
            return { ...state, loading: false, cardList }
        case UPDATE_BANNER:
            return { ...state, loading: false, banner: action.banner }
        default:
            return state
    }
}

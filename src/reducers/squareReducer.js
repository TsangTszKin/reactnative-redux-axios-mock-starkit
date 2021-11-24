import {
    LOAD_CARD_LIST,
    UPDATE_CARD_LIST,
    UPDATE_BANNER,
} from '../actions';

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
    switch (action.type) {
        case LOAD_CARD_LIST:
            return { ...state, loading: true }
        case UPDATE_CARD_LIST:
			let { total, list } = action.data
			// 设置唯一值key
			for (var i = state.cardList.localTotal; i < list.length; i++) {
				list[i].key = i
			}
			const cardList = {
				dataSource: [...state.cardList.dataSource, ...list],
				localTotal: state.cardList.localTotal + dataSource.length,
				remoteTotal: total,
			}
            return { ...state, loading: false, cardList }
        case UPDATE_BANNER:
            return { ...state, loading: false, banner: action.banner }
        default:
            return state
    }
}

import {
	LOAD_CARD_LIST,
	UPDATE_CARD_LIST,
} from './types';
import { getCardList } from '../services/squareService';

const loadCardList = () => {
	return {
		type: LOAD_CARD_LIST
	}
}
const updateCardList = (cardList) => {
	return {
		type: UPDATE_CARD_LIST,
		cardList
	}
}
const requestCardList = (...params) => {
	return async (dispatch) => {
		try {
			dispatch(loadCardList())
			const res = await getCardList(...params)
			console.log('res', res)
			return dispatch(updateCardList(res.result.dataList))
		} catch (err) {
			console.error('err', err)
		}
	}
}

export {
	loadCardList,
	updateCardList,
	requestCardList
}

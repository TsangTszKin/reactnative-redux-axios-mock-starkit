import {
	LOAD_MY_CARD_LIST,
	UPDATE_MY_CARD_LIST,
} from './types';
import { getMyCardList } from '../services/shareService';

const load_my_card_list = () => {
	return {
		type: LOAD_MY_CARD_LIST
	}
}
const updateMyCardList = (data) => {
	return {
		type: UPDATE_MY_CARD_LIST,
		data
	}
}
const requestMyCardList = (refresh = false) => {
	return async (dispatch) => {
		try {
			dispatch(load_my_card_list())
			const res = await getMyCardList()
			console.warn('res', res)
			return dispatch(updateMyCardList(res.data))
		} catch (err) {
			console.error('err', err)
		}
	}
}

export {
	load_my_card_list,
	updateMyCardList,
	requestMyCardList,
}

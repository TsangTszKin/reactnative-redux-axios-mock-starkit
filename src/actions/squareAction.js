import {
	LOAD_CARD_LIST,
	LOAD_BANNER,
	UPDATE_CARD_LIST,
	UPDATE_BANNER,
} from './types';
import { getCardList, getBanner } from '../services/squareService';

const load_card_list = () => {
	return {
		type: LOAD_CARD_LIST
	}
}
const load_banner = () => {
	return {
		type: LOAD_BANNER
	}
}
const updateCardList = (data) => {
	return {
		type: UPDATE_CARD_LIST,
		data
	}
}
const updateBanner = (banner) => {
	return {
		type: UPDATE_BANNER,
		banner
	}
}
const requestCardList = (...params) => {
	return async (dispatch) => {
		try {
			dispatch(load_card_list())
			const res = await getCardList(...params)
			console.log('res', res)
			return dispatch(updateCardList(res.data))
		} catch (err) {
			console.error('err', err)
		}
	}
}

const requestBanner = (...params) => {
	return async (dispatch) => {
		try {
			dispatch(load_banner())
			const res = await getBanner(...params)
			console.log('res', res)
			return dispatch(updateBanner(res.data))
		} catch (err) {
			console.error('err', err)
		}
	}
}

export {
	load_card_list,
	load_banner,
	updateCardList,
	updateBanner,
	requestCardList,
	requestBanner,
}

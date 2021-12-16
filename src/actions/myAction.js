import {
	LOAD_MY_CARD_LIST,
	UPDATE_MY_CARD_LIST,
	LOAD_MY_SHOP,
	UPDATE_MY_SHOP,
} from './types';
import { getCardList } from '../services/shareService';
import { getShopList } from '../services/shopService'

const load_my_card_list = () => {
	return {
		type: LOAD_MY_CARD_LIST
	}
}
const load_my_shop = () => {
	return {
		type: LOAD_MY_SHOP
	}
}
const updateMyCardList = (data) => {
	return {
		type: UPDATE_MY_CARD_LIST,
		data
	}
}
const updateMyShop = (data) => {
	return {
		type: UPDATE_MY_SHOP,
		data
	}
}
const requestMyCardList = () => {
	return async (dispatch) => {
		try {
			dispatch(load_my_card_list())
			const res = await getCardList()
			console.warn('res', res)
			return dispatch(updateMyCardList(res.data))
		} catch (err) {
			console.error('err', err)
		}
	}
}
const requestMyShop = () => {
	return async (dispatch) => {
		try {
			dispatch(load_my_shop())
			const res = await getShopList()
			console.warn('res', res)
			return dispatch(updateMyShop(res.data))
		} catch (err) {
			console.error('err', err)
		}
	}
}

export {
	load_my_card_list,
	updateMyCardList,
	requestMyCardList,
	load_my_shop,
	updateMyShop,
	requestMyShop
}

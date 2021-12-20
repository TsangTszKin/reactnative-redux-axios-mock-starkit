import {
	LOAD_FOLLOW_LIST,
	UPDATE_FOLLOW_LIST,
	LOAD_NOTICE_LIST,
	UPDATE_NOTICE_LIST,
} from './types';
import {
	getFollowList,
	getNoticeList,
} from '../services/messageService';

const load_follow_list = () => {
	return {
		type: LOAD_FOLLOW_LIST
	}
}
const load_notice_list = () => {
	return {
		type: LOAD_NOTICE_LIST
	}
}
const updateFollowList = (data) => {
	return {
		type: UPDATE_FOLLOW_LIST,
		data
	}
}
const updateNoticeList = (data) => {
	return {
		type: UPDATE_NOTICE_LIST,
		data
	}
}
const requestFollowList = () => {
	return async (dispatch) => {
		try {
			dispatch(load_follow_list())
			const res = await getFollowList()
			return dispatch(updateFollowList(res.data))
		} catch (err) {
		}
	}
}
const requestNoticeList = () => {
	return async (dispatch) => {
		try {
			dispatch(load_notice_list())
			const res = await getNoticeList()
			console.warn('res', res)
			return dispatch(updateNoticeList(res.data))
		} catch (err) {
			console.error('err', err)
		}
	}
}

export {
	load_follow_list,
	load_notice_list,
	updateFollowList,
	updateNoticeList,
	requestFollowList,
	requestNoticeList,
}

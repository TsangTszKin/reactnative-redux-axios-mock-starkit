import {
    LOAD_FOLLOW_LIST,
    UPDATE_FOLLOW_LIST,
    LOAD_NOTICE_LIST,
    UPDATE_NOTICE_LIST,
} from '../actions/types';

const initState = {
    loading: false,
    followList: [],
    noticeList: [],
}

export default (state = initState, action = {}) => {
    console.log('message --- action', action)
    switch (action.type) {
        case LOAD_FOLLOW_LIST:
        case LOAD_NOTICE_LIST:
            return { ...state, loading: true }
        case UPDATE_FOLLOW_LIST:
            const followList = action.data.list
            return { ...state, loading: false, followList }
        case UPDATE_NOTICE_LIST:
            const noticeList = action.data.list
            return { ...state, loading: false, noticeList }
        default:
            return state
    }
}

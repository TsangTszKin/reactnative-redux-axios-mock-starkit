/*
 * @descripttion: 
 * @author: 逍游
 * @time: Do not edit
 */
import {
    getFollowList_mock,
    getNoticeList_mock,
} from './mock';

const getFollowList = params => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(getFollowList_mock)
        }, 500);
    })
}

const getNoticeList = params => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(getNoticeList_mock)
        }, 500);
    })
}


export {
    getFollowList,
    getNoticeList,
}

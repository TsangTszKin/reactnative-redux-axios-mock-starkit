/*
 * @descripttion: 
 * @author: 逍游
 * @time: Do not edit
 */
import { getBanner_mock, getShareList_mock, getShopList_mock } from './mock';

const getBanner = params => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(getBanner_mock)
        }, 500);
    })
}

const getCardList = params => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(getShareList_mock)
        }, 1000);
    })
}

const getShareList = params => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(getShopList_mock)
        }, 500);
    })
}


export {
    getBanner,
    getCardList,
    getShareList
}

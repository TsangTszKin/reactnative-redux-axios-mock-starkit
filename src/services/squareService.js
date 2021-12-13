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
        resolve(getShareList_mock)
    })
}

const getShareList = params => {
    return new Promise(resolve => {
        resolve(getShopList_mock)
    })
}


export {
    getBanner,
    getCardList,
    getShareList
}

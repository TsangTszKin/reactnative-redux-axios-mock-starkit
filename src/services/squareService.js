/*
 * @descripttion: 
 * @author: 逍游
 * @time: Do not edit
 */
import { getShareList } from './mock';

const getCardList = params => {
    return new Promise(resolve => {
        resolve(getShareList)
    })
}

const getBanner = params => {
    return new Promise(resolve => {
        resolve(getShareList)
    })
}


export {
    getCardList,
    getBanner
}

/*
 * @descripttion: 
 * @author: 逍游
 * @time: Do not edit
 */
import { getShareList_mock } from './mock';

const getCardList = params => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(getShareList_mock)
        }, 1000);
    })
}

export {
    getCardList
}

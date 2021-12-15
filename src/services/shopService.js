/*
 * @descripttion: 
 * @author: 逍游
 * @time: Do not edit
 */
import { getShopList_mock } from './mock';

const getShopList = params => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(getShopList_mock)
        }, 500);
    })
}


export {
    getShopList,
}

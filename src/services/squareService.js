/*
 * @descripttion: 
 * @author: 逍游
 * @time: Do not edit
 */
import axios from '../utils/http';

export default {
    getCardList(params) {
        return axios.get('http://localhost:8081/static/mock/square.json')
    },
    getBanner(params) {
        return axios.get(`/api/getBanner`)
    },
}

import axios from '../utils/http';

export default {
    getCardList(params) {
        return axios.get(`/api/getCardList`)
    },
    getBanner(params) {
        return axios.get(`/api/getBanner`)
    },
}

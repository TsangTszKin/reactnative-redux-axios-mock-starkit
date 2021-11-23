import {
    LOAD_CARD_LIST,
    UPDATE_CARD_LIST,
} from './types';
import squareService from '../services/squareService';

export default {
    loadCardList() {
        return {
            type: LOAD_CARD_LIST
        }
    },
    updateCardList(cardList) {
        return {
            type: UPDATE_CARD_LIST,
            cardList
        }
    },
    requestCardList(...params) {
        return async (dispatch) => {
            try {
                dispatch(this.loadCardList())
                const res = await squareService.getCardList(...params)
                return dispatch(this.updateCardList(res.data.data))
            } catch (err) {
            }
        }
    }
}

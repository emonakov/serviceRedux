import { serviceBuilder } from '~utils/';
import { API } from '~config';
import { useService, useAction } from '~utils/useService'

const getCards = serviceBuilder('getCards', async (state, cardId) => {
    return (await fetch(API.CARDS)).json();
});

export const useCardsAction = () => useService(getCards)
export const useUpdateCardsAction = () => useAction(getCards.getNewActionSync((state) => {
    console.log(state.cards)

    return {
        data: [
            ...state.cards.data,
            { name: 'new card' }
        ]
    }
}));

export const
    cardsReducer = getCards.reducer,
    getCardsAction = getCards.action;

import React from 'react';
import { useCardsAction, useUpdateCardsAction } from 'services/cardService';
import useAppState from '~utils/useAppState';

export default () => {
    const [getCardsAction, clearCardsAction] = useCardsAction();
    const updateCardsAction = useUpdateCardsAction();
    const cardsList = useAppState('cards.data', []);

    return <div>
        <button onClick={getCardsAction}>get cards</button>
        <button onClick={updateCardsAction}>update cards</button>
        <button onClick={clearCardsAction}>clear</button>
        {cardsList.map(({name}) => <div>{name}</div>)}
    </div>
}

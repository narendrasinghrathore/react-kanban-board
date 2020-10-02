import React from 'react';
import { ICard } from '../../../models/ICard';

const Card = React.memo((props: { card: ICard }) => {

    return <div>
        {props.card.name}
    </div>

});

export default Card;

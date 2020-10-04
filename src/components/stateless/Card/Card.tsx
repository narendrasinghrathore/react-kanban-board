import React from 'react';
import "./Card.scss";
import { ICard } from '../../../models/ICard';

const Card = React.memo((props: { card: ICard }) => {

    return <div className="card">
        <div className="heading">
            {props.card.name}
        </div>
        <div className="content">

        </div>
    </div>

});

export default Card;

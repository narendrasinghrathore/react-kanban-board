import { ICard } from "../../models/ICard";

const ACTION = "[BOARD]";

const ADD_CARD = `${ACTION} ADD CARD`;

const actionAddCard = (payload: ICard) => ({
    type: ADD_CARD,
    payload
});

export {
    ADD_CARD,
    actionAddCard
}
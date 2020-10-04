import { ICard } from "./ICard";

export interface IAppState {
    board: Board,
    task: Task,
    theme: Theme
}

export interface Board {

    cards: ICard[],
    loading: boolean;
    message: string;
    task: string[]

}

export interface Theme {
    name: string;
}

export interface Task {
    list: Item[];
    loading: boolean;
    message: string;
}

export interface Item {
    id: string;
    title: string;
    content: string;
    startdate: number;
    assigned: string[];
    enddate: number;
    card: string;
    checklist: { id: string, title: string; completed: boolean }[]
}


export interface IUser {
    id: string;
    name: string;
}
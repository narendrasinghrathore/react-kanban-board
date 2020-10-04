import { Task } from "../../models/IAppState";

const intialState: Task = {
    list: [],
    loading: false,
    message: ''
}

const task = (state: Task = intialState, action: { type: string, payload: any }): Task => {
    switch (action.type) {

        default: {
            return { ...state };
        }
    }
}

export default task;
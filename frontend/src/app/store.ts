import { INCREMENT } from "./action";

export interface IAppState {
    count: number;
}
export const InitialState: IAppState = { count: 0 }
export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case INCREMENT: return { count: state.count + 1 };
    }
    return state;
}
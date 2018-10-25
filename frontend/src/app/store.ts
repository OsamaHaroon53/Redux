import { tassign } from "tassign";
import { INCREMENT } from "./action";

export interface IAppState {
    count: number;
    // messages?: {
    //     newmessage: number;
    // };
}
export const InitialState: IAppState = {
    count: 0
    // ,messages:{
    //     newmessage: 5
    // }
}
export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case INCREMENT:
            // return { count: state.count + 1 };
            // return Object.assign({}, state, { count: state.count + 1 });//it make interface useless or other property can be initialize 
            return tassign(state,{ count: state.count + 1 });
    }
    return state;
}
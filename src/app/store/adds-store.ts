import { ActionReducer, Action } from '@ngrx/store';

export function addsReducer(state: any[] = [], action: Action) {
    switch(action.type) {
        case 'POST':{
            console.log("Current state before post is", state);
            state.push(action.payload);
            return state;
        }
        case 'VIEW':{
            console.log("Current state is", state);
            return state;
        }
        default: {
            return state;
        }
    }
}
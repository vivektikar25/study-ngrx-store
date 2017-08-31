import { ActionReducer, Action } from '@ngrx/store';

export function addsReducer(state: any[] = [], action) {
    switch(action.type) {
        case 'POST':
            state.push(action.payload);
            return state;
        case 'VIEW':
            return state;
    }
}
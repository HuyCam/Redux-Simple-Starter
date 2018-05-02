// State argument is not aplication state, only the state
// this reducer is responsible for
// state here is just the state of the reducer to manage application,
// not application state.
export default function(state = null, action) {
    
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    // this is when we don't care about the action, just return the previous state
    return state;
}
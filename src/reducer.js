
const initialState = {
    history: []
}

export default function reducer (state = initialState, action){
    switch(action.type) {
        case 'addHistory':
            return {...state, history: [...state.history, action.payload]}
        default: 
            return state
    }
}
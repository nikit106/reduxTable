const initialState = {
    items: null,
    filterBy: ''
}


export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_INFO':
            return {
                ...state,
                items: action.payload
            }
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.payload
            }
        default:
            return state
    }
}
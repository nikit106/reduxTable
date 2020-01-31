const initialState = {
    info: [{
        id: '2',
        title: 'heloo'
    }]
}


export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_INFO':
            return {
                ...state,
                info: action.payload
            }
        default:
            return state
    }
}
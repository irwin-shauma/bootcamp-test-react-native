// redux/reducers/countReducer.js
const initialState = {
    count: 1
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'COUNT_INCREASE':
            return {
                ...state,
                count: state.count + 1
            }
        case 'COUNT_DECREASE':
            return {
                ...state,
                count: state.count - 1
            }
        case 'SAVE_ASSIGN_ID':
            return {
                ...state,
                assignId: action.payload.assignId,
                testHeaderId: action.payload.testHeaderId
            }

        default:
            return state;
    }
}
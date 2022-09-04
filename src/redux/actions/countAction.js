// redux/actions/countAction.js
export const increment = () => {
    return {
        type: 'COUNT_INCREASE'
    }
}

export const decrement = () => {
    return {
        type: 'COUNT_DECREASE'
    }
}

export const save_assignId = (assignId, testHeaderId) => {
    return {
        type: 'SAVE_ASSIGN_ID',
        payload: {
            assignId: assignId,
            testHeaderId: testHeaderId
        }
    }
}
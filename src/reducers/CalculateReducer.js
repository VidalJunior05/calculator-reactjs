const initialState = {
    history: []
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case 'addCalculateNew':
            let history = [...state.history];
            history.push(action.calculate);
            return { ...state, history };
        break;
    }

    return state;
}
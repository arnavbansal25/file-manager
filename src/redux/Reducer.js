
import myData from "../utils/dummy.json";

// Reducer is the main part of the redux store
// It sopecifies how different actions are handled


// initial state values for the reducer
const initialState = {
    data: myData,
}


export default (state = initialState, action) => {
    switch (action.type) {
        case 'Rename':
            return {
                ...state,
                rename: action.value,
            }
        default:
            return state;
    }
}





const initialState = 0;

const changeTheNumber = ( state = initialState, action) => {
    switch(action.type) {
        case "INCREEMENR" : return state + 1;
        case "DECREEMENT" : return state - 1;
        default : return state;
    }
}

export default changeTheNumber;
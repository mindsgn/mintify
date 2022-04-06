import { CONNECT, DISCONNECT } from "../../constants";

const initailState = {
    auth: false,
}

export const authReducer  = (state = initailState, action: any) => {
    switch (action.type) {
        case CONNECT:
            return { ...state, auth: action.payload };
        case DISCONNECT:
            return { ...state, auth: action.payload };
        default:
            return state;
    }
};
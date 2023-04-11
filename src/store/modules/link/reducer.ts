import { ADD_LINK } from "./actionTypes";

const initialState: Array<string> = []

export const linksReducer = (state = initialState, action: any)=>{

    switch(action.type){
        case ADD_LINK:
            const {link} = action
            return [...state, link]
        default:
            return state
    }
}
import { ADD_LINK } from "./actionTypes"

export const addLink = (link: string)=>{
    return{
        type: ADD_LINK,
        link
    }
}
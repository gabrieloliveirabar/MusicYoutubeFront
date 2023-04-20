import { useContext } from "react"
import { ModalBase } from "../ModalBase"
import { SongContext } from "../../../context/songContext"

export const ModalError = () => {
    const { setOpenModalErrorMsg, errorMsg } = useContext(SongContext)
    
    
        return(
        <ModalBase titleHeader="Error Messsage" setState={setOpenModalErrorMsg}>
                <div>{errorMsg}</div>
        </ModalBase>
        )
}
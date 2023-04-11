import { Header } from "../../components/Header"
linkSchema
import { ButtonStyled, HomeStyled, MainStyled, SerchMusic, StyledDescription } from "./styles"

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLink } from "../../store/modules/link/actions";
import { linkSchema } from "../../validators/linkValidations";

export const Home = () => {

    const [link, setLink] = useState<string>("")
    const dispatch = useDispatch()

    const links = useSelector((state: any) => state.links)
    
    const  handAddLink = (link:string) => {
        linkSchema.isValid({url:link}).then((isValid)=>{
            if (isValid) {
                dispatch(addLink(link))
           }
         })
    }
    
    return (
        <HomeStyled>
            <Header />
            <MainStyled>
                <StyledDescription>
                    <h2>Gostou de uma música no youtube e quer o mp3 dela?</h2>
                    <p>este site disponibiliza para você, a sua música do youtube tão desejada em mp3!</p>
                </StyledDescription>
                <SerchMusic>
                    
                    <input type="text"  placeholder="https://www.youtube.com/" onChange={(e)=>setLink(e.target.value)} />
                    <ButtonStyled onClick={()=>handAddLink(link)} >mp3</ButtonStyled>
                </SerchMusic>
            </MainStyled>
        </HomeStyled>
    )
}
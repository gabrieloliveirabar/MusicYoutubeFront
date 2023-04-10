import { Header } from "../../components/Header"
import { ButtonStyled, HomeStyled, MainStyled, SerchMusic, StyledDescription } from "./styles"

export const Home = () => {
    return (
        <HomeStyled>
            <Header />
            <MainStyled>
                <StyledDescription>
                    <h2>Gostou de uma música no youtube e quer o mp3 dela?</h2>
                    <p>este site disponibiliza para você, a sua música do youtube tão desejada em mp3!</p>
                </StyledDescription>
                <SerchMusic>
                    
                    <input type="text" value="" placeholder="https://www.youtube.com/" />
                    <ButtonStyled >mp3</ButtonStyled>
                </SerchMusic>
            </MainStyled>
        </HomeStyled>
    )
}
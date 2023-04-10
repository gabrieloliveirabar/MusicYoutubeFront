import styled from "styled-components";

export const HomeStyled = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #1E1E1E;;
`
export const MainStyled = styled.main`
    height: 80vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   

`
export const StyledDescription = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
    
        h2{
            font-style: oblique;
            font-weight: 600;
            font-size: 40px;
            color: white;
            font-family: 'Roboto', sans-serif;
        }

        p{

            font-style: oblique;
            font-weight: 300;
            font-size: 25px;
            color: white;
            font-family: 'Roboto', sans-serif;

        }
`

export const SerchMusic = styled.div`
    width: 100% ;
    margin-top: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    input{
        
        width: clamp( 312px, 75%, 805px );
        height: 43px;
        padding: 5px;

        background: #2D2A2A;
        border-radius: 0px 5px 5px 5px;
        border: none;

        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
    }
    input:hover{
        
        height: 43px;

        background: #2D2A2A;
        border-radius: 0px 5px 5px 5px;
        border: 1px solid var(--color-red);
    }
`
export const ButtonStyled = styled.button`
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 4px;
    background-color: var(--color-red);
    margin-top:20px ;

    color: white;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
`
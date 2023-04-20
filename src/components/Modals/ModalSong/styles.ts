import styled from "styled-components";

export const StyledModalSong = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .ContainerAudio{
        height: 100%;
        width: 226px;
        margin: 5%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .buttonDowload{
        background-color: black;
        color: white;
        border: none;
        border-radius: 5px;

        padding: 5px;

        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
           
    }
  

`

export const StyledSong = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;

    audio{
        width: 211px;
    }
`
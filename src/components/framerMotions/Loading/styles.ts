import styled from "styled-components";

export const StyledContanerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const StyledLoading = styled.div`

    height: 20px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: center;
    

    .loading-bar {
    height: 100%;
    width: 0%;
    background-color: black;
    }
`
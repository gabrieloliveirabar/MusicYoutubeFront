import styled from "styled-components";

export const StyledErrorModal = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: var(--grey1);
  }
  h2 {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 25px;
      color: var(--grey1);
    }

  @media screen and (min-width: 700px) {
    h2 {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      color: var(--grey1);
    }
    p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: var(--grey1);
  }
}
`;

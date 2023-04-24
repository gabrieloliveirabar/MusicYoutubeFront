import styled from "styled-components";

export const StyledModal = styled.div`
  background: var(--color-red);
  border-radius: 8px;
  padding: 5px 16px;
  height: 240px;
  width: clamp(54%, 512px, 80%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 30%;
  left: 9%;

  .headerModal {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: var(--grey1);
    }

    button {
      height: 10px;
      width: 10px;
      color: var(--grey4);
      border: none;
      background: transparent;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
    }
  }

  @media screen and (min-width: 700px) {
    top: 30%;
    left: 19%;
  }
`;

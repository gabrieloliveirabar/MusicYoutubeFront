import styled from "styled-components";

export const WrapperStyled = styled.div`
  width: 100vw;
  margin: 0 auto;
`;
export const NavStyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-red);
  padding: 2rem 2rem;
  border-radius: 0 0 0.4rem 0.4rem;

  #toggle,
  label {
    display: none;
  }

  .Logo {
    font-weight: 700;
  }
  @media (max-width: 40.625em) {
    padding: 1rem 1.5rem;
    .menu {
      width: 100%;
      height: 0;
      overflow: hidden;
    }

    label {
      display: inline-flex;
      color: white;
      cursor: pointer;
    }
    #toggle:checked ~ .menu {
      height: 100%;
    }
  }
`;
export const UlStyled = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  li {
    color: white;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
  }

  @media (max-width: 40.625em) {
    flex-direction: column;
    align-items: center;
    padding: 0.2rem 0;
  }
`;
export const LogoStyled = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  img {
    height: 60px;
  }
`;

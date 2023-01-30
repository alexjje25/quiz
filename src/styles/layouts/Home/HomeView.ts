import styled from "styled-components";

export const HomeView = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  width: 100%;
  height: 100%;

  .Imagem1 {
    top: 0;
    left: -47px;
    /* margin-top: 36px; */
    width: 1291px;
    height: 594px;
    position: relative;
  }
  .Imagem2 {
    position: absolute;
  }
  .Imagem3 {
    position: absolute;
  }

button {
  background: #FF7C00;
    border: none;
    color: white;
    width: 40%;
    height: 53px;
    font-size: 27px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;

}

  h1 {
    /* position: absolute; */
    /* UI Properties */
    text-align: left;
    font-weight: 600;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
    font-family: Poppins;
  }

 
`;

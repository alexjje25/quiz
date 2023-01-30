import styled from "styled-components";

export const SelecaoGrupoView = styled.main`
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

  p{
    color: white;
    font-family: Poppins;
    width: 386px;
    text-align: center;
  }
  button {
    background: #FF7C00;
    border: none;
    color: white;
    width: 76%;
    height: 107px;
    font-size: 29px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    letter-spacing: 4px;
}

  h1 {
    font-weight: 600;
    /* position: absolute; */
    /* UI Properties */
    text-align: center;
    font-family: Poppins;
    letter-spacing: 0px;
    color: #72635D;
    opacity: 1;
    width: 584px;
  }

  h2 {
    /* UI Properties */
    text-align: center;
    font-family: Poppins;
    letter-spacing: 0px;
    color: #17717d;
    opacity: 1;
  }
`;

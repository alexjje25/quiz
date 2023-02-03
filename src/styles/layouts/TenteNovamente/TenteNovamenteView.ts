import styled from "styled-components";

export const TenteNovamenteView = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  width: 100%;
  height: 100%;

  .Imagem1 {
    top: 28px;
    left: -47px;
    width: 1710px;
    height: 960px;
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
    width: 49%;
    height: 53px;
    font-size: 27px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 42px;

}

  h1 {
    /* position: absolute; */
    /* UI Properties */
    text-align: center;
    font-family: Poppins;
    letter-spacing: 0px;
    color: #72635D;
    opacity: 1;
    width: 549px;
    font-size: 45px;
    margin-top: -10px;
  }

  h2 {
    /* UI Properties */
    text-align: center;
    font-family: Poppins;
    letter-spacing: 0px;
    color: #17717d;
    opacity: 1;
    text-align: center;
    font-size: 30px;
  }
`;

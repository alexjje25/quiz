import styled from "styled-components";

export const PerguntasView = styled.main`
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

  .TEEEE{
    position: absolute;
    margin-top: -580px;
    padding-right: 341px;
  }
  .img2{
    width: 10px;
    height: 10px;
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
    font-family: Poppins;
    /* position: absolute; */
    /* UI Properties */
       letter-spacing: 0px;
    color: #72635D;
    opacity: 1;
    width: 678px;
    font-size: 22px;
    margin-top: -4px;
  }

  h2 {
    /* UI Properties */
    font-family: Poppins;
    letter-spacing: 0px;
    color: #17717d;
    opacity: 1;
    text-align: center;
    font-size: 16px;
    padding-left: 1px;
    
  }

  .main{
    margin-top: -241px;
    display: flex;
    flex-direction: column;
    align-items: self-start;
  }
  .content{
    width: 100%;
  }
  .questionA{
    display: flex;
    justify-content: space-between;
    line-height: 107px;
    height: 114px;
    cursor: pointer;
    
  }
  .question{
    background: #F0EFED;
    width: 88%;
    border-radius: 23px;
  }
  h4{
    font-size: 32px;
    font-family: sans-serif;
    font-weight: 900;
    color: #17717D;
    margin-top: 3px;
  }


`;

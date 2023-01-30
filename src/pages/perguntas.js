/* eslint-disable @next/next/no-img-element */
import Progress from "@/components/Progress/Progress";
import { PerguntasView } from "@/styles/layouts/Perguntas/PerguntasView";

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Regulamento() {
  const router = useRouter();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if(!show){
      $(".TEEEE").append(`<img
      src="/progress2.png"
      alt="Progress"
      className='img2'
      style="width: 69px;"
    />`);
    $('.question').css('background', '#1DCB34');
    }
  });
 
  // useEffect(() => {
  //   $(".TEEEE").append(`<img
  //    src="/progress2.png"
  //    alt="Progress"
  //    className='img2'
  //    style="width: 69px;"
  //  />`);
  // });

  return (
    <PerguntasView>
      <img
        src="/grupomascara3.png"
        alt="Minha Figura"
        className="Imagem5"
        style={{ marginBottom: "500px" }}
      />

      <Image
        src="/uniao1.png"
        alt={"imagem de fundo"}
        width={1440}
        height={670}
        className="Imagem1"
      />

      <img
        src="/uniao4.svg"
        alt="Minha Figura"
        className="Imagem2"
        style={{
          width: "1180px",
          height: "608px",
          paddingLeft: "142px",
          paddingTop: "64px",
          paddingRight: "44px",
        }}
      />
      <div className="TEEEE">
        <img
          src="/progress.png"
          alt="Progress"
          className="Imagem2"
          style={{
            width: "270px",
            height: "26px",
            paddingLeft: "142px",
            paddingRight: "44px",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          width: "35%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingLeft: "10px",
        }}
      >
        <div className="main">
          {/* <h2>Regulamento</h2>
          <h1>
            1- Qual a importância de se obter consentimento para manter contato
            com o HCP?
          </h1> */}
        </div>
        <div className="content">
          <div className="questionA" onClick={() => setShow(!show)}>
            {show}
            <h4>A</h4>
            <div className="question">teste teste teste</div>
          </div>

          <div className="wrapperQuestion">
            <h4 style={{ marginTop: "-8px" }}>A</h4>
            <div className="question">teste teste teste</div>
          </div>
          <div className="wrapperQuestion">
            <h4 style={{ marginTop: "-8px" }}>A</h4>
            <div className="question">teste teste teste</div>
          </div>
        </div>
      </div>
    </PerguntasView>
  );
}

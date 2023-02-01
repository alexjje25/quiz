/* eslint-disable @next/next/no-img-element */
import { PerguntasView } from "@/styles/layouts/Perguntas/PerguntasView";
import axios from "axios";

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Regulamento() {
  const router = useRouter();
  const [show, setShow] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);

  const shuffleArray = (arr) => {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
  }

  let isCorrectAux=1
  const handleClick = (isCorrect) => {
    if (isCorrect) isCorrectAux++
    if (index === 3) {
      axios.patch(`http://localhost:3001/users/${localStorage.getItem('id:quiz')}`, {
        correctAnswersCount: isCorrectAux
      })
    router.push('/')
    }
    setClicked(true)
    setTimeout(() => {
      setClicked(false)
      setIndex(index+1)
    }, 1000);
  }

  const fetch = async () => {
    const { data } = await axios.get('http://localhost:3001/questions')
    setQuestions(shuffleArray(data.OpCo).slice(0, 4))
    console.log(shuffleArray(data.OpCo).slice(0, 4))
  }
  useEffect(() => {
    fetch()
  }, [])

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
          <h2>Regulamento</h2>
          <h1>
            {index+1} - {questions[index]?.title}
          </h1>
        </div>
        <div className="content">
          {questions[index]?.answers
            ?.map(answer => (
              <div key={answer} className="questionA" onClick={() => handleClick(answer.isCorrect)}>
                <h4>{answer.letter}</h4>
                <div className="question" style={{ backgroundColor: clicked ? answer.isCorrect ? "#1DCB34" : '#FF3939' : '' }}>{answer.label}</div>
              </div>
            ))
          }
        </div>
      </div>
    </PerguntasView>
  );
}
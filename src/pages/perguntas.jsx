/* eslint-disable @next/next/no-img-element */
import CustomizedSteppers from "@/components/Progress/Progress";
import { PerguntasView } from "@/styles/layouts/Perguntas/PerguntasView";
import axios from "axios";

import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

let isCorrectAux=0
export default function Regulamento() {
  const router = useRouter();
  const [team, setTeam] = useState("");
  const [clicked, setClicked] = useState(false);
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);

  const Ref = useRef(null);

  const [timer, setTimer] = useState("00:10");

  const [startGameCount, setStartGameCount] = useState(3);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    const { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(seconds > 9 ? seconds : "0" + seconds);
    }
  };

  useEffect(() => {
    setTimer("00:10");
  }, [index+1]);

  const clearTimer = (e) => {
    setTimer("4");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    const deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 4);
    return deadline;
  };

  useEffect(() => {
    setTimeout(() => {
      if (startGameCount >= 0) {
        setStartGameCount(startGameCount - 1);
      }
    }, 1000);
  }, [startGameCount]);

  useEffect(() => {
    if (timer === "00") {
      setIndex(index + 1);
      console.log("acabou o tempo ");
    }
  }, [timer]);

  useEffect(() => {
    console.log(startGameCount);
    if (startGameCount <= 0) {
      clearTimer(getDeadTime());
    }
  }, [startGameCount]);

  const getTeam = async () => {
    const {
      data: { team },
    } = await axios.get(
      `http://localhost:3001/users/${localStorage.getItem("id:quiz")}`
    );
    setTeam(team);
    return team;
  };
  getTeam();

  const shuffleArray = (arr) => {
    if (!arr?.length) return;
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
  };

  const handleClick = (isCorrect) => {
    console.log(isCorrect)
    if (isCorrect) isCorrectAux++
    console.log(isCorrectAux)
    if (index === 3) {
      axios.patch(`http://localhost:3001/users/${localStorage.getItem('id:quiz')}`, {
        correctAnswersCount: isCorrectAux
      })
      if(isCorrectAux >= 4) {
        router.push('/agradecimento');
      }
      if(isCorrectAux < 4) {
        router.push('/')
      }
      // router.push('/')
    }
    setClicked(true)
    setTimeout(() => {
      setClicked(false);
      setIndex(index + 1);
    }, 1000);
  };

  const fetch = async () => {
    const { data } = await axios.get('http://localhost:3001/questions')
    console.log(data[team ?? localStorage.getItem('team')])
    setQuestions(shuffleArray(data[team ?? localStorage.getItem('team')]).slice(0, 4))
    console.log(shuffleArray(data[team ?? localStorage.getItem('team')]).slice(0, 4))
  }
  useEffect(() => {
    fetch()
  }, [team])

  return (
    <PerguntasView>
      <img
        src="/grupomascara3.png"
        alt="Minha Figura"
        className="Imagem5"
        style={{ marginBottom: "844px", marginRight: "-98px" }}
      />
      <p
        style={{
          marginBottom: "844px",
          marginRight: "-98px",
          position: "absolute",
          color: "black",
          zIndex: "999",
        }}
      >
        {timer}
      </p>
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
          width: "1711px",
          height: "892px",
          paddingLeft: "36px",
          paddingTop: "193px",
          paddingRight: "44px",
        }}
      />
      <div className="TEEEE">
        <CustomizedSteppers index={index + 1} style={{ width: "141%" }} />
      </div>

      <div
        style={{
          position: "absolute",
          width: "53%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingLeft: "19px",
        }}
      >
        <div className="main" style={{ marginTop: '0rem' }}>
          <h2>{questions[index]?.area}</h2>
          <h1>
            {index + 1} - {questions[index]?.title}
          </h1>
        </div>
        <div className="content" style={{ paddingLeft: "113px" }}>
          {questions[index]?.answers?.map((answer) => (
            <div
              key={answer}
              className="questionA"
              onClick={() => handleClick(answer.isCorrect)}
            >
              <h4>{answer.letter}</h4>
              {clicked ? (
                answer.isCorrect ? (
                  <h2
                    className="respost"
                    style={{
                      position: "absolute",
                      marginLeft: "215px",
                      transform: "translate(13rem, 1.5rem)",
                      backgroundColor: "#fff",
                      height: "45px",
                      display: "flex",
                      width: "180px",
                      alignItems: "center",
                      paddingLeft: "45px",
                      borderRadius: "5px",
                      fontSize: "26px",
                      color: "#1DCB34",
                      marginTop: "-1px",
                    }}
                  >
                    CORRETO!
                  </h2>
                ) : (
                  <h2
                    className="respost"
                    style={{
                      position: "absolute",
                      marginLeft: "215px",
                      transform: "translate(13rem, 1.5rem)",
                      backgroundColor: "#fff",
                      height: "45px",
                      display: "flex",
                      width: "182px",
                      alignItems: "center",
                      paddingLeft: "43px",
                      borderRadius: "5px",
                      fontSize: "26px",
                      color: "#FF3939",
                      marginTop: "-1px",
                    }}
                  >
                    INCORRETO
                  </h2>
                )
              ) : null}
              <div
                className="question"
                style={{
                  backgroundColor: clicked
                    ? answer.isCorrect
                      ? "#1DCB34"
                      : "#FF3939"
                    : "",
                }}
              >
                {answer.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PerguntasView>
  );
}

/* eslint-disable @next/next/no-img-element */
import CustomizedSteppers from "@/components/Progress/Progress";
import { PerguntasView } from "@/styles/layouts/Perguntas/PerguntasView";
import axios from "axios";
import { useTimer } from 'react-timer-hook';

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

let isCorrectAux=0
export default function Regulamento() {
  const router = useRouter();
  const [team, setTeam] = useState("");
  const [clicked, setClicked] = useState(false);
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);



  const time = new Date();
  time.setSeconds(time.getSeconds() + 60); // 10 minutes timer

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
      setTimeout(() => {
        if(isCorrectAux >= 4) {
          
          router.push('/agradecimento');
        }
        if(isCorrectAux < 4) {
          $('h1').css('display', 'none');
          router.push('/tente-novamente')
          
        }
      }, 3000);
      
       router.push('/')
    }
    setClicked(true)
    setTimeout(() => {
      setClicked(false);
      setIndex(index + 1);
    }, 4000);

  };

  const fetch = async () => {
    const { data } = await axios.get('http://localhost:3001/questions')
    setQuestions(shuffleArray(data[team ?? localStorage.getItem('team')])?.slice(0, 4))
    console.log(questions)
  }
  useEffect(() => {
    fetch()
  }, [team])

  if (!questions) return;

  return (
    <PerguntasView>
      <img
        src="/grupomascara3.png"
        alt="Minha Figura"
        className="Imagem5"
        style={{ marginBottom: "844px", marginRight: "-98px" }}
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
          width: "1711px",
          height: "892px",
          paddingLeft: "36px",
          paddingTop: "193px",
          paddingRight: "44px",
        }}
      />
      <div className="TEEEE">
        <CustomizedSteppers index={index} style={{ width: "141%" }} />
      </div>
      <div style={{position:"absolute", marginTop:"-878px", paddingLeft:"1020px"}}>
      <img
        src="/clock.png"
        alt="Minha Figura"
        className="Imagem6"
        style={{ position: "absolute",
        color: "black",
        zIndex: "999",
        width:"80px",
        paddingLeft:"42px",
        top:"30px",
       }}
      />
      <p
        style={{
          marginBottom: "844px",
          position: "absolute",
          color: "black",
          zIndex: "999",fontSize:"41px",
          top:"-13px"
        }}
      >
        
        

        <MyTimer expiryTimestamp={time} onExpire={() => {
          axios.patch(`http://localhost:3001/users/${localStorage.getItem('id:quiz')}`, {
            correctAnswersCount: isCorrectAux
          })
          if(isCorrectAux >= 4) {
            router.push('/agradecimento');
          }
          if(isCorrectAux < 4) {
            router.push('/tente-novamente')
          }
          router.push('/')
        }}/> 
      </p>
      </div>
      <div
        style={{
          position: "absolute",
          width: "80%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingLeft: "19px",
        }}
      >
        <div className="main" style={{ marginTop: '0rem' }}>
          <h2>{questions[index]?.area}</h2>
          <h1 id="h1">
            {index + 1} - {questions[index]?.title}
          </h1>
        </div>
        <div className="content" style={{ paddingRight: "17px", marginTop:'30px' }}>
          {questions[index]?.answers?.map((answer) => (
            <div
              key={answer}
              className="questionA"
              onClick={() => handleClick(answer.isCorrect)}
            >
              <h4>{answer.letter}{/* answer.isCorrect ? 'aqui' : '' */}</h4>
              {clicked ? (
                answer.isCorrect ? (
                  <h2
                    className="respost"
                    style={{
                      position: "absolute",
                      marginLeft: "390px",
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
                      marginLeft: "390px",
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
                <div className="wrapperQuestion1">
                  <span style={{color:"#72635D", fontSize:"20px", fontFamily:"Poppins"}}>{answer.label}</span>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </PerguntasView>
  );
}

function MyTimer({ expiryTimestamp, onExpire }) {
  const {
    seconds,
    minutes,
  } = useTimer({ expiryTimestamp, onExpire: () => onExpire() });

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '52px', color:"white", }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}
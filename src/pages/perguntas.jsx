/* eslint-disable @next/next/no-img-element */
import CustomizedSteppers from "@/components/Progress/Progress";
import { PerguntasView } from "@/styles/layouts/Perguntas/PerguntasView";
import axios from "axios";

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

let isCorrectAux=0
export default function Regulamento() {
  const router = useRouter();
  const [team, setTeam] = useState('');
  const [clicked, setClicked] = useState(false);
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);

  const getTeam = async () => {
    const { data: { team } } = await axios.get(`http://localhost:3001/users/${localStorage.getItem('id:quiz')}`)
    setTeam(team)
    return team
  }
  getTeam()

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
  }

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
      setClicked(false)
      setIndex(index+1)
    }, 1000);
  }

  const fetch = async () => {
    const { data } = await axios.get('http://localhost:3001/questions')
    setQuestions(shuffleArray(data[team ?? localStorage.getItem('team')])?.slice(0, 4))
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
          width: "1247px",
          height: "630px",
          paddingLeft: "180px",
          paddingTop: "79px",
          paddingRight: "44px",
        }}
      />
      <div className="TEEEE">
        <CustomizedSteppers index={index} />
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
            {index+1} - {questions[index]?.title}
          </h1>
        </div>
        <div className="content" style={{paddingLeft:'113px'}}>
          {questions[index]?.answers
            ?.map(answer => (
              <div key={answer} className="questionA" onClick={() => handleClick(answer.isCorrect)}>
                <h4>{answer.letter}</h4>
                {
                  clicked ?
                  answer.isCorrect
                    ? <h2 className='respost' style={{ position: 'absolute', marginLeft:'215px', transform: 'translate(13rem, 1.5rem)', backgroundColor: "#fff", height: '45px', display: 'flex',  width:'180px', alignItems: 'center', paddingLeft:'45px', borderRadius: '5px',fontSize:'26px', color:'#1DCB34', marginTop:'-1px'}}>CORRETO!</h2>
                    : <h2 className='respost' style={{ position: 'absolute', marginLeft:'215px', transform: 'translate(13rem, 1.5rem)', backgroundColor: "#fff", height: '45px', display: 'flex',  width:'182px', alignItems: 'center', paddingLeft:'43px', borderRadius: '5px',fontSize:'26px', color:'#FF3939', marginTop:'-1px'}}>INCORRETO</h2>
                    : null
                }
                <div className="question" style={{ backgroundColor: clicked ? answer.isCorrect ? "#1DCB34" : '#FF3939' : '' }}>{answer.label}{answer.isCorrect ? 'aqui' : 'não'}</div>
                
              </div>
            ))
          }
        </div>
      </div>
    </PerguntasView>
  );
}
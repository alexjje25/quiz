/* eslint-disable @next/next/no-img-element */

import { ColetaDadosView } from "@/styles/layouts/ColetaDados/ColetaDadosView";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface person {
  name: string;
  email: string;
}

export default function ColetaDados() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [team, setTeam] = useState('comercial')

  const handleSubmit = async () => {
    if (name === "" && email === "") {
      alert('Preencha os Dados corretamente');
    }
    else

      try {
        axios.post("http://localhost:3001/users", {
          email,
          name,
          team
        })
          .then(function (response) {
            localStorage.setItem('id:quiz', response.data.id)
            router.push('perguntas')
          })
          .then(function (response) {
            // @ts-ignore
            localStorage.setItem("id:quiz", response?.data.id);
            router.push("perguntas");
          });
      } catch (error) {
        console.log(error);
      }
  };

  useEffect(() => {
    console.log(team)
  }, [team])


  return (
    <ColetaDadosView>
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
      <div
        style={{
          position: "absolute",
          width: "35%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Preencha seus dados:</h1>
        <div
          style={{
            display: "flex",
            gap: "40px",
            width: "515px",
            flexDirection: "column",
            alignItems: 'center'
          }}
        >
          <input style={{ height: "50px" }} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
          <input style={{ height: "50px" }} type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <div>
            <button className='button' style={{ width: 210, marginRight: 95 }} onClick={() => setTeam('demanda')} disabled={team !== 'comercial'}>Time<br />Demanda</button>
            <button className='button' style={{ width: 210 }} onClick={() => setTeam('comercial')} disabled={team !== 'demanda'}>{`Time\nComercial`}</button>
          </div>
          <button onClick={handleSubmit}>teste</button>
        </div>
      </div>
    </ColetaDadosView>
  );
}

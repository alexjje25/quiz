/* eslint-disable @next/next/no-img-element */

import { ColetaDadosView } from "@/styles/layouts/ColetaDados/ColetaDadosView";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";



interface person {
  name: string;
  email: string;
}

export default function ColetaDados() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  console.log(name);
  const handleSubmit = async () => {
    if(name === "" && email === "") {
      alert('Preencha os Dados corretamente');
    }
    if(email.search("@")==-1){
      alert('Digite o email corretamente');
    }
    else

    try {
      axios
        .post("http://localhost:3001/users", {
          email,
          name,
        })
        .then(function (response) {
          localStorage.setItem("id:quiz", response.data.id);
          router.push("perguntas");
        });
    } catch (error) {
      console.log(error);
    }
    console.log("to auqi");
  };

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
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
            required
          />
          <input
            
            type="text"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <button onClick={handleSubmit}>JOGAR</button>
        </div>
      </div>
    </ColetaDadosView>
  );
}

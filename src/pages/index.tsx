import { HomeView } from "@/styles/layouts/Home/HomeView";
import { useRouter } from "next/router";

import Image from "next/image";

export default function Home() {

  const router = useRouter();

  return (
    <HomeView>
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
        src="/uniao3.png"
        alt="Minha Figura"
        className="Imagem2"
        style={{
          width: "1146px",
          height: "608px",
          paddingLeft: "116px",
          paddingTop: "63px",
          
        }}
      />

      <img
        src="/uniao13.svg"
        alt="Minha Figura"
        className="Imagem2"
        style={{
          width: "1060px",
          height: "505px",
          paddingLeft: "158px",
          paddingTop: "4px",
          paddingRight: "44px",
        }}
      />

      <div style={{ position: 'absolute', width:'42%', display:'flex', alignItems:'flex-start', flexDirection:'column', paddingLeft:'116px' }}>
      
        <h1>
        Participe do QUIZ e teste seus conhecimentos
        </h1>
       
        <button onClick={() => router.push('/regulamento')}>CONTINUAR</button>
      </div>
    </HomeView>
  );
}

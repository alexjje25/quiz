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
        style={{ marginBottom: "844px", marginRight:"-98px" }}
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
          width: "1667px",
          height: "886px",
          paddingLeft: "55px",
          paddingTop: "170px",
          paddingRight: "44px",
        }}
      />

      <img
        src="/uniao13.svg"
        alt="Minha Figura"
        className="Imagem2"
        style={{
          width: "1552px",
          height: "735px",
          paddingLeft: "56px",
          paddingTop: "80px",
          paddingRight: "44px",
        }}
      />

      <div style={{ position: 'absolute', width:'37%', display:'flex', alignItems:'flex-start', flexDirection:'column', paddingLeft:'116px' }}>
      
        <h1>
        Participe do QUIZ e teste seus conhecimentos
        </h1>
       
        <button onClick={() => router.push('/regulamento')}>CONTINUAR</button>
      </div>
    </HomeView>
  );
}

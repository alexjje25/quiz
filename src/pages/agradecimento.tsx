import { TenteNovamenteView } from "@/styles/layouts/TenteNovamente/TenteNovamenteView";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function TenteNovamente() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/parceiros')
    }, 4000);
  }, [])

  return (
    <TenteNovamenteView>
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
        src="/uniao4.svg"
        alt="Minha Figura"
        className="Imagem2"
        style={{
          width: "1667px",
          height: "890px",
          paddingLeft: "52px",
          paddingTop: "167px",
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
          paddingLeft:"10px",
        }}
      >
        <h2>Comercial</h2>
        <h1>
        Parabéns você acertou todas as perguntas!
        </h1>
      </div>
    </TenteNovamenteView>
  );
}

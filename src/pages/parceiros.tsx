import { RegulamentoView } from "@/styles/layouts/Regulamento/RegulamentoView";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Parceiros() {
  const router = useRouter();

  return (
    <RegulamentoView>
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
          paddingLeft: "10px",
        }}
      >
        <img src="/MARCAS.png" alt="Minha Figura" style={{ width: "800px" }} />
      </div>
    </RegulamentoView>
  );
}

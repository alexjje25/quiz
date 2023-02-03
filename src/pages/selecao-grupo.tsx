
import { SelecaoGrupoView } from "@/styles/layouts/SelecaoGrupo/SelecaoGrupoView";
import Image from "next/image";
import { useRouter } from "next/router";

export default function SelecaoGrupo() {
  const router = useRouter();

  return (
    <SelecaoGrupoView>
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
        }}
      >
        <h1>Qual grupo você participa:</h1>
        <div style={{ display: 'flex', gap: '10px', width: '515px', marginTop: '18px' }}>
          <button style={{ marginBottom: '30px' }} onClick={() => {
            router.push("/coleta-dados")
            localStorage.setItem('team', 'demanda')
          }}>Time Demanda</button>
          <button onClick={() => {
            router.push("/coleta-dados")
            localStorage.setItem('team', 'comercial')
          }}>Time Comercial</button>
        </div>
      </div>
    </SelecaoGrupoView>
  );
}

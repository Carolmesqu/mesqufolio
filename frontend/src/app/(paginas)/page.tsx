import { obterTecnologias } from "@/functions/tecnologias";
import Curriculo from "../components/curriculo";
import Principal from "../components/landing/Principal";
import { url } from "inspector";
import Container from "../components/shared/Container";


export default async function Home() {
  console.log(url)
  const tecnologias = await obterTecnologias()

  return (
    <div>
      <Principal tecnologias={tecnologias.destaques}/>
      <Container className="py-16">
        <Curriculo tecnologias={tecnologias.todas}/>
      </Container>
    </div>
  );
}

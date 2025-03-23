import Cabecalho from "@/app/components/shared/Cabecalho";
import CarrosselImagens from "@/app/components/shared/CarrosselImagens";
import Container from "@/app/components/shared/Container";
import Tecnologias from "@/app/components/tecnologias/Tecnologias";
import { obterReadme } from "@/functions/github";
import { obterProjeto } from "@/functions/projetos";

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params;
    const projeto = await obterProjeto(id);

    if(!projeto) return null

    const readme = await obterReadme(projeto.repositorio)

    return projeto ? (
        <div className="bg-black">
            <Cabecalho />
            <Container className="py-7 flex flex-col items-center gap-10">
                <h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>           
                <CarrosselImagens imagens={projeto.imagens.slice(1)}/>
                <Tecnologias lista={projeto.tecnologias} tamanhoMenor/>
            </Container>         
        </div>
    )
}
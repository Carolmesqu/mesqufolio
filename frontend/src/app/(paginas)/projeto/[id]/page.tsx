import Cabecalho from "@/app/components/shared/Cabecalho";
import Container from "@/app/components/shared/Container";
import { obterProjeto } from "@/functions/projetos";

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params;
    const projeto = await obterProjeto(id);
    return projeto ? (
        <div className="bg-black">
            <Cabecalho />
            <Container className="py-7 flex flex-col gap-10">
                <h1 className="text-3xl font-bold">{projeto.nome}</h1>
            </Container>         
        </div>
    ) : null
}
import { Projeto, Tipo } from "@core";
import { httpGet } from "./api";

export async function obterProjetos() {
    const projetos: Projeto[] = await httpGet("/projetos");
    
    return {
        todos: projetos, 
        get mobile() {
            return projetos.filter((projetos) => projetos.tipo === Tipo.MOBILE)
        },
        get web() {
            return projetos.filter((projetos) => projetos.tipo === Tipo.WEB)
        },
        get jogos() {
            return projetos.filter((projetos) => projetos.tipo === Tipo.JOGO)
        },
        get destaque() {
            return projetos.filter((projetos) => projetos.destaque === true)
        },
    }
}

export async function obterProjeto(id: string): Promise<Projeto | null> {
    return await httpGet(`/projetos/${id}`);
}
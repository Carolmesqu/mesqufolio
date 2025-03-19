export default interface Tecnologia {
    id: number;
    nome: string;
    descricao: string;
    imagem: string;
    destaque: boolean;
}

// Partial<Tecnologia> é um tipo genérico que permite criar um objeto com propriedades opcionais de Tecnologia.
// Isso é útil para criar objetos parciais de Tecnologia.
const t: Partial<Tecnologia> = {
    nome: 'React',
    descricao: 'Biblioteca para construção de interfaces',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    destaque: true
};  
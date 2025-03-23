import Image from "next/image";

export default function MiniCV() {
    return (
        <div className="flex flex-col gap-6 md:flex-row items-center justify-center bg-black border border-zinc-800 rounded-2xl px-6 pt-6 max-w-4xl mx-auto">            
            <div className="relative min-w-72 h-64 flex items-center justify-center">
                <Image src="/minha-imagem.jpg" alt="Foto de Perfil" fill className="object-contain" />
            </div>      
            <div className="flex flex-col gap-5 text-center md:text-left px-6 max-w-md">
                <div>
                    <span className="bg-gradient-to-r from-green-500 via-white to-white text-transparent bg-clip-text text-2xl font-bold">
                        Maria Carolina
                    </span>
                    <p className="text-gray-300">Analista de Desenvolvimento de Sistemas</p>
                </div>
                
                <p className="text-sm text-gray-400">
                    Sou desenvolvedora full-stack, atuando em uma equipe de inovação com metodologias ágeis (SCRUM). 
                    Tenho experiência em front-end e back-end, focando em eficiência, escalabilidade e qualidade de código. 
                    Trabalho com Angular, ColdFusion, TypeScript, Node.js e SQL Server, além de criar automações e integrações.
                </p>
            </div>
        </div>

    )
}
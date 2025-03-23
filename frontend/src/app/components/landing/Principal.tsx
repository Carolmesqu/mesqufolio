import Cabecalho from "../shared/Cabecalho"

export default function Principal() {
  return (
    <div className="
        flex flex-col items-center justify-center h-[500px]
        bg-[url('/principal.jpg')] bg-cover bg-center
    ">
        <Cabecalho/>
        <div className="
        flex-1 flex flex-col justify-center items-center
        ">
            <h1 className="flex gap-3 items-center">
                <span   className="w-2 h-2 roundend-full"
                        style={{ backgroundColor: "var(--cor-principal)" }}
                ></span>
                <span className="text-3xl sm:text-5xl font-bold text-center">
                    Maria Mesquita
                </span>
                <span   className="w-2 h-2 roundend-full"
                        style={{ backgroundColor: "var(--cor-principal)" }}
                ></span>
            </h1>
            <h2 className="text-zinc-500">Desenvolvedora Full Stack</h2>
      </div>
    </div>
  );
}
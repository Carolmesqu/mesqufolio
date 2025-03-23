import { Tecnologia } from "@core";
import Cabecalho from "../shared/Cabecalho"
import Tecnologias from "../tecnologias/tecnologias";

export interface PrincipalProps {
  tecnologias: Tecnologia[];
}

export default function Principal(props: PrincipalProps) {
  return (
    <div className="
        flex w-full flex-col items-center justify-center h-[500px]
        bg-[url('/principal.jpg')] bg-cover bg-center
    ">
        <Cabecalho/>
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col items-center gap-1">
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
            <h2 className="text-zinc-500 text-center">Desenvolvedora Full Stack</h2>
          </div>
            <Tecnologias lista={props.tecnologias}/>
      </div>
    </div>
  );
}
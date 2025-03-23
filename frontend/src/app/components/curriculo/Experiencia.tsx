export default function Experiencia() {
    return (
        <div className="flex flex-col md:flex-row lg:flex-col items-center justify-around bg-black gap-6 p-6 border border-zinc-800 rounded-2xl">
            <Item principal="+2" label="anos de experiência"></Item>
        </div>
    )
}

function Item(props: {principal: string, label: string}) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-3xl font-bold leading-6" style={{ color: "var(--cor-principal)" }}>{props.principal}</span>
            <span className="text-zinc-400 text-sm text-center">{props.label}</span>
        </div>
    )
}

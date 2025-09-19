import src from "../../assets/avatar-home.svg"

export const HomePage = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-[3rem]">
      <p className="text-6xl font-bold">
        Bem-Vindo ao <span className="bg-primary p-4 text-white">MyElder!</span>
      </p>
      <p className="text-2xl">
        A sua rede social para{" "}
        <span className="bg-primary p-1 text-white">cuidados com idosos!</span>
      </p>
      <img src={src} className="size-[25rem]" />
    </div>
  )
}

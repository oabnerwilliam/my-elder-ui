import React from "react"

type ContainerProps = {
  children: React.ReactNode
  customClass?: string
}

const Container = (props: ContainerProps) => {
  const classesMap: Record<string, string> = {
    "p-top": "pt-28",
    "min-height": "min-h-[75vh]",
    router: "min-h-[75vh] mt-28",
    start: "justify-start",
    column: "flex-col justify-start",
  }

  const customClass = classesMap[props.customClass ?? ""] ?? ""

  return (
    <div
      className={`w-full max-w-[120rem] my-0 mx-auto px-[3rem]
    flex justify-center items-center h-full relative
    ${customClass}`}
    >
      {props.children}
    </div>
  )
}

export default Container

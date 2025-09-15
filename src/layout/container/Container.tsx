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
      className={`max-w-200 my-0 mx-auto 
    flex justify-between items-center h-full
    ${customClass}`}
    >
      {props.children}
    </div>
  )
}

export default Container

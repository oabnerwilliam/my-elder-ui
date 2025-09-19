import type { ReactNode } from "react"

export const PageContainer = ({ children }: { children: ReactNode }) => (
  <div className="w-full h-full my-5 ml-[20rem]">{children}</div>
)

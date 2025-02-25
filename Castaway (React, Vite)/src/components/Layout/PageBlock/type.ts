import { ReactNode } from "react"

export type TPageBlockProps = {
    className?: string,
    children: ReactNode,
    tagName?: keyof JSX.IntrinsicElements
    isSpaced?: boolean
}
import { HtmlHTMLAttributes } from 'react'

export interface TableProps extends HtmlHTMLAttributes<HTMLTableElement> {}
export const Table = ({ children, ...props }: TableProps) => {
  return <table {...props}>{children}</table>
}

import { cn } from '@/lib/utils'
import { HtmlHTMLAttributes } from 'react'

export function H1({
  children,
  className,
  ...props
}: HtmlHTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

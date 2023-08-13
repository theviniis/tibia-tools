import { cn } from '@/lib/utils'
import { HtmlHTMLAttributes } from 'react'

export function H2({
  children,
  className,
  ...props
}: HtmlHTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

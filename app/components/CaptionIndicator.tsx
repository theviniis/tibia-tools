import { BG_COLOR_VARIANTS_SKINS, bgColorVariants } from '@/components/ui/table'
import { cn } from '@/lib/utils'

export const CaptionIndicator = ({
  skin = 'neutral',
  className,
}: {
  className?: string
  skin?: BG_COLOR_VARIANTS_SKINS
}) => {
  return (
    <span
      className={cn(
        'inline-block aspect-square w-3 rounded-full',
        bgColorVariants({ skin }),
        className,
      )}
    ></span>
  )
}

import { calcCharSpeed } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

enum HasteSpellProps {
  none = 'none',
  haste = 'utani hur',
  strongHaste = 'utani gran hur',
  charge = 'utani tempo hur',
  swiftFoot = 'utamo tempo san',
}

const schema = z.object({
  level: z.coerce.number().positive().transform(Number),
  spell: z.nativeEnum(HasteSpellProps).optional(),
})

type FormProps = z.infer<typeof schema>

export const useSpeedBreakPoint = () => {
  const form = useForm<FormProps>({
    defaultValues: {
      level: 1,
      spell: undefined,
    },
    resolver: zodResolver(schema),
  })
  const level = form.watch('level')
  const spell = form.watch('spell')
  const charSpeed = calcCharSpeed({ level, spell })
  return { form, level, spell, charSpeed }
}

import { HasteSpellsProps, calcCharSpeed } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useLocalStorage } from '.'

const schema = z.object({
  level: z.coerce.number().positive().transform(Number),
  spell: z.nativeEnum(HasteSpellsProps).optional(),
})

type FormProps = z.infer<typeof schema>

export const useSpeedBreakPoint = () => {
  const { get, set } = useLocalStorage()
  const form = useForm<FormProps>({
    defaultValues: {
      level: Number(get('level')) ?? 1,
      spell: get('spell') ?? undefined,
    },
    resolver: zodResolver(schema),
  })

  const level = form.watch('level')
  set('level', level)

  const spell = form.watch('spell')
  set('spell', spell)

  const charSpeed = calcCharSpeed({ level, spell })

  return { form, level, spell, charSpeed }
}

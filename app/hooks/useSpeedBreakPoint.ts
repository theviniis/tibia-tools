import {
  HasteSpellsProps,
  calcCharSpeed,
  getItemFromLocalStorage,
} from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  level: z.coerce.number().min(1).positive().transform(Number),
  spell: z.nativeEnum(HasteSpellsProps).optional(),
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

  useEffect(() => {
    const level = getItemFromLocalStorage('level')
    const spell = getItemFromLocalStorage('spell')

    if (level) {
      form.setValue('level', level)
    }
    if (spell) {
      form.setValue('spell', spell)
    }
  }, [form])

  const level = form.watch('level')
  const spell = form.watch('spell')
  const charSpeed = calcCharSpeed({ level, spell })

  return { form, level, spell, charSpeed }
}

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export enum HasteSpellsProps {
  none = 'none',
  haste = 'utani hur',
  strongHaste = 'utani gran hur',
  charge = 'utani tempo hur',
  swiftFoot = 'utamo tempo san',
}

type calcCharSpeedProps = {
  level: number
  spell?: HasteSpellsProps
}

function calcCharBaseSpeed(level: number) {
  return Math.floor(109 + Number(level))
}

function calcCharSpeedWithHasteSpell({ level, spell }: calcCharSpeedProps) {
  const speedBase = calcCharBaseSpeed(level)
  if (!spell) return speedBase
  const spells = {
    none: 0,
    haste: 1.3 * (speedBase - 40) + 40,
    strongHaste: 1.7 * (speedBase - 40) + 40,
    charge: 1.9 * (speedBase - 40) + 40,
    swiftFoot: 1.8 * (speedBase - 40) + 40,
  } as const
  return Math.floor(spells[spell as keyof typeof spells])
}

export function calcCharSpeed({ level, spell }: calcCharSpeedProps) {
  const baseSpeed = calcCharBaseSpeed(level)
  let modifiers = 0
  let totalWithModifiers = 0

  if (spell) {
    totalWithModifiers = calcCharSpeedWithHasteSpell({ level, spell })
  }
  if (totalWithModifiers > 0) {
    modifiers = totalWithModifiers - baseSpeed
  }

  const speed = {
    base: baseSpeed,
    modifiers,
    totalWithModifiers,
  } as const
  return speed
}

export function getItemFromLocalStorage(key: string) {
  if (typeof window === 'undefined') return null
  const data = window.localStorage.getItem(key)
  return JSON.parse(data!)
}

export function setItemFromLocalStorage(key: string, value: unknown) {
  if (typeof window === 'undefined') return null
  const data = JSON.stringify(value)
  if (!data) return
  return window.localStorage.setItem(key, data)
}

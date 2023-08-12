'use client'
export const useLocalStorage = () => {
  function get(key: string) {
    if (typeof window === 'undefined') return null
    const data = window.localStorage.getItem(key)
    return JSON.parse(data!)
  }
  function set(key: string, value: unknown) {
    if (typeof window === 'undefined') return null
    const data = JSON.stringify(value)
    if (!data) return
    return window.localStorage.setItem(key, data)
  }
  return { get, set }
}

export const useLocalStorage = () => {
  'use client'
  function get(key: string) {
    const data = window.localStorage.getItem(key)
    return JSON.parse(data!)
  }
  function set(key: string, value: unknown) {
    const data = JSON.stringify(value)
    if (!data) return
    return window.localStorage.setItem(key, data)
  }
  return { get, set }
}

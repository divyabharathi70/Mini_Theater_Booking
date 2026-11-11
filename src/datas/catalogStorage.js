import { customizations } from './Customization'
import { themes } from './Themes'
import { surprises } from './Surprises'

export const catalogKeys = {
  themes: 'theaterThemes',
  customizations: 'theaterCustomizations',
  surprises: 'theaterSurprises',
}

const initialCatalogs = { themes, customizations, surprises }

export function readCatalog(type) {
  const key = catalogKeys[type]
  if (!key) return []
  try {
    const saved = localStorage.getItem(key)
    const parsed = saved ? JSON.parse(saved) : null
    return Array.isArray(parsed) ? parsed : initialCatalogs[type]
  } catch {
    return initialCatalogs[type]
  }
}

export function saveCatalog(type, items) {
  const key = catalogKeys[type]
  if (!key) return
  localStorage.setItem(key, JSON.stringify(items))
}

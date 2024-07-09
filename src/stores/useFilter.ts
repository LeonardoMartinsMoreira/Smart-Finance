import { create } from 'zustand'

interface IFilter {
  query?: string
  setQuery: (query: string) => void
}

export const useFilterStore = create<IFilter>((set) => ({
  query: '',
  setQuery: (query: string) => {
    set({ query })
  },
}))

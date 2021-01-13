import { createContext } from 'react'
export const TextContext = createContext({
  texts: [],
  appendText: () => {}
});

"use client"
import { useState, createContext, Dispatch, SetStateAction, useContext } from "react"

interface AppContextTypes {
  currentColor: string | null
  setCurrentColor: Dispatch<SetStateAction<string | null>>
}

const AppContext = createContext<AppContextTypes | null>(null)

function AppContextProvider({ children }: {
  children: React.ReactNode
}) {
  const [currentColor, setCurrentColor] = useState<string | null>(null)
  return (
    <AppContext.Provider value={{ currentColor, setCurrentColor }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => useContext(AppContext) as AppContextTypes

export {
  AppContextProvider, useAppContext
}
import { createContext, useContext, useState } from 'react'

const NavigationContext = createContext()

export function NavigationProvider({ children }) {
  const [navigation, setNavigation] = useState({
    parent: null,
    section: null
  })

  const updateNavigation = (type, value) => {
    setNavigation(prev => ({
      ...prev,
      [type]: value
    }))
  }

  return (
    <NavigationContext.Provider value={{ navigation, updateNavigation }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
}
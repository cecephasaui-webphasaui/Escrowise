"use client"
import { useState, createContext, useContext } from "react"
import type React from "react"

import WelcomePopup from "./WelcomePopup"

interface WelcomePopupContextType {
  showWelcomePopup: () => void
}

const WelcomePopupContext = createContext<WelcomePopupContextType>({
  showWelcomePopup: () => {},
})

export const useWelcomePopup = () => useContext(WelcomePopupContext)

export const WelcomePopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false)

  const showWelcomePopup = () => {
    setShowPopup(true)
  }

  return (
    <WelcomePopupContext.Provider value={{ showWelcomePopup }}>
      {children}
      <WelcomePopup showPopup={showPopup} onClose={() => setShowPopup(false)} />
    </WelcomePopupContext.Provider>
  )
}

// Usage example:
// 1. Wrap your app with WelcomePopupProvider in layout.tsx instead of directly using WelcomePopup
// 2. In any component, use: const { showWelcomePopup } = useWelcomePopup()
// 3. Call showWelcomePopup() to display the popup programmatically


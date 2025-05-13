// Example usage of the WelcomePopupProvider
// This is just for demonstration - don't actually create this file

"use client"
import { useWelcomePopup } from "@/components/welcome/WelcomePopupProvider"

export default function ExampleUsage() {
  const { showWelcomePopup } = useWelcomePopup()

  return (
    <div>
      <button onClick={() => showWelcomePopup()} className="px-4 py-2 bg-orange-400 text-white rounded">
        Show Welcome Message
      </button>
      <p>This button will trigger the welcome popup to appear</p>
    </div>
  )
}

// To use this approach, replace the WelcomePopup in layout.tsx with:
// <WelcomePopupProvider>{children}</WelcomePopupProvider>


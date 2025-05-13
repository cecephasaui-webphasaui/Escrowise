"use client"
import { useState, useEffect } from "react"
import type React from "react"
import Link from "next/link"

interface WelcomePopupProps {
  onClose?: () => void
}

const WelcomePopup: React.FC<WelcomePopupProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if this popup has been shown before
    const hasSeenWelcome = localStorage.getItem("escrowise-welcome-seen")

    if (!hasSeenWelcome) {
      // Show popup with a slight delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    // Mark as seen
    localStorage.setItem("escrowise-welcome-seen", "true")

    if (onClose) {
      onClose()
    }
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 font-sans">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
        <div className="p-8 flex flex-col items-center text-center">
          {/* Icon */}
          <div className="w-24 h-24 rounded-full bg-[#e8f8e8] flex items-center justify-center mb-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e0ea3887e96cbd804834ba67e5d575857ede7f?placeholderIfAbsent=true&apiKey=4da4e5020e3c4dcf85e2d10d2c5dbe02"
              alt="Escrowise Logo"
              className="w-14 h-14 object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold mb-3 text-gray-800">Welcome to Escrowise!</h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 max-w-xs">
            Secure your transactions with confidence. We'll guide you through creating your first escrow.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 w-full">
            <button
              onClick={handleClose}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Manage settings
            </button>

            <Link
              href="/transaction"
              className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-md font-medium hover:bg-gray-700 transition-colors"
              onClick={handleClose}
            >
              Go to dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomePopup


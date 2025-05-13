"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-md overflow-hidden"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-[2px] rounded-xl shadow-xl">
              <div className="bg-white rounded-[10px] overflow-hidden">
                {/* Top decorative bar */}
                <div className="h-1.5 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400"></div>

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>

                {/* Content */}
                <div className="p-8 pt-10 text-center">
                  <div className="mb-6 inline-block">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e0ea3887e96cbd804834ba67e5d575857ede7f?placeholderIfAbsent=true&apiKey=4da4e5020e3c4dcf85e2d10d2c5dbe02"
                        alt="Escrowise Logo"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-2 text-gray-800">Welcome to Escrowise!</h2>

                  <p className="text-gray-600 mb-6 max-w-xs mx-auto">
                    Secure, seamless, and trustworthy escrow services for your business transactions.
                  </p>

                  <div className="flex flex-col gap-3">
                    <Link
                      href="/dashboard/transactions"
                      className="px-6 py-3 bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      Get Started
                    </Link>

                    <button
                      onClick={handleClose}
                      className="px-6 py-2 text-gray-500 hover:text-gray-700 font-medium transition-colors text-sm"
                    >
                      Maybe Later
                    </button>
                  </div>
                </div>

                {/* Bottom decorative elements */}
                <div className="flex justify-between px-8 pb-4 text-xs text-gray-400">
                  <span>Escrowise</span>
                  <span>Secure Transactions</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomePopup


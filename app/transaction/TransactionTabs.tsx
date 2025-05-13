"use client"

import type React from "react"
import { useState } from "react"

interface TransactionTabsProps {
  onTabChange: (tab: string) => void
}

const TransactionTabs: React.FC<TransactionTabsProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("all")

  const tabs = [
    { id: "all", label: "All" },
    { id: "action-required", label: "Action Required" },
    { id: "open", label: "Open" },
    { id: "closed", label: "Closed" },
  ]

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    onTabChange(tabId)
  }

  return (
    <div className="overflow-x-auto pb-2 mb-6">
      <nav className="flex min-w-max border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-4 py-3 text-sm sm:text-base md:text-lg font-medium transition-all relative
              ${activeTab === tab.id ? "text-amber-600 font-semibold" : "text-gray-600 hover:text-gray-800"}
            `}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 rounded-t-sm"></span>
            )}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default TransactionTabs


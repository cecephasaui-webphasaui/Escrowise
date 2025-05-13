"use client"

import type React from "react"
import { useState } from "react"
import TransactionTabs from "./TransactionTabs"
import TransactionSearch from "./TransactionSearch"
import TransactionTable from "./TransactionTable"
import type { Transaction } from "./types"
import { ArrowLeft, Plus } from "lucide-react"
import Link from "next/link"

const TransactionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample transaction data
  const allTransactions: Transaction[] = [
    {
      id: "13090867",
      title: "Create a web application for Escrowise",
      created: "Mar 27, 2025",
      amount: "$2,500.00",
      currency: "USD",
      role: "Buyer",
      status: {
        type: "awaiting-response",
        text: "Awaiting response",
      },
    },
    {
      id: "13090730",
      title: "Webapp development project for Escrowise",
      created: "Mar 26, 2025",
      amount: "$1,435.00",
      currency: "USD",
      role: "Buyer",
      status: {
        type: "awaiting-payment",
        text: "Awaiting Payment",
      },
    },
    {
      id: "13090529",
      title: "UI/UX Design for Mobile Application",
      created: "Mar 24, 2025",
      amount: "$850.00",
      currency: "USD",
      role: "Seller",
      status: {
        type: "completed",
        text: "Completed",
      },
    },
  ]

  // Filter transactions based on active tab and search query
  const filteredTransactions = allTransactions.filter((transaction) => {
    const matchesSearch =
      transaction.title.toLowerCase().includes(searchQuery.toLowerCase()) || transaction.id.includes(searchQuery)

    if (activeTab === "all") return matchesSearch
    if (activeTab === "action-required") {
      return (
        matchesSearch &&
        (transaction.status.type === "awaiting-response" || transaction.status.type === "awaiting-payment")
      )
    }
    if (activeTab === "open") {
      return (
        matchesSearch &&
        (transaction.status.type === "awaiting-response" || transaction.status.type === "awaiting-payment")
      )
    }
    if (activeTab === "closed") {
      return matchesSearch && (transaction.status.type === "completed" || transaction.status.type === "cancelled")
    }

    return matchesSearch
  })

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleFilter = () => {
    // Implement filter functionality
    console.log("Filter button clicked")
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-2">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Dashboard
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Transactions</h1>
          </div>
          <Link
            href="/transaction"
            className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Transaction
          </Link>
        </div>

        <TransactionTabs onTabChange={handleTabChange} />

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 sm:p-6">
            <TransactionSearch
              onSearch={handleSearch}
              onFilter={handleFilter}
              totalTransactions={allTransactions.length}
              visibleTransactions={filteredTransactions.length}
            />

            <TransactionTable transactions={filteredTransactions} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default TransactionsPage


"use client"

import type React from "react"
import type { Transaction } from "./types"
import StatusBadge from "./StatusBadge"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface TransactionTableProps {
  transactions: Transaction[]
}

const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
  if (transactions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 mb-4 rounded-full bg-amber-50 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-amber-500"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M7 10h10" />
            <path d="M7 14h10" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">No transactions found</h3>
        <p className="text-gray-500 mb-6 max-w-sm">
          No transactions match your current filters. Try adjusting your search or filters.
        </p>
        <button
          className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          onClick={() => (window.location.href = "/transaction/new")}
        >
          Create New Transaction
        </button>
      </div>
    )
  }

  // For larger screens - traditional table
  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-lg">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="p-4 text-sm font-medium text-left text-gray-600">ID</th>
              <th className="p-4 text-sm font-medium text-left text-gray-600">Transaction Title</th>
              <th className="p-4 text-sm font-medium text-left text-gray-600">Created</th>
              <th className="p-4 text-sm font-medium text-left text-gray-600">Amount</th>
              <th className="p-4 text-sm font-medium text-left text-gray-600">Role</th>
              <th className="p-4 text-sm font-medium text-left text-gray-600">Status</th>
              <th className="p-4 text-sm font-medium text-left text-gray-600">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 text-sm text-gray-600">{transaction.id}</td>
                <td className="p-4 text-sm font-medium text-gray-900">{transaction.title}</td>
                <td className="p-4 text-sm text-gray-600">{transaction.created}</td>
                <td className="p-4 text-sm">
                  <span className="font-medium text-gray-900">{transaction.amount}</span>
                  <span className="text-gray-600"> {transaction.currency}</span>
                </td>
                <td className="p-4 text-sm text-gray-600">{transaction.role}</td>
                <td className="p-4">
                  <StatusBadge type={transaction.status.type} text={transaction.status.text} />
                </td>
                <td className="p-4 text-right">
                  <Link
                    href={`/transaction/${transaction.id}`}
                    className="text-amber-600 hover:text-amber-800 transition-colors"
                  >
                    <span className="sr-only">View details for {transaction.title}</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {transactions.map((transaction) => (
          <Link
            href={`/transaction/${transaction.id}`}
            key={transaction.id}
            className="block bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-amber-300 hover:shadow-md transition-all"
          >
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{transaction.title}</h3>
                <StatusBadge type={transaction.status.type} text={transaction.status.text} />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="text-gray-500">ID</p>
                  <p className="font-medium">{transaction.id}</p>
                </div>
                <div>
                  <p className="text-gray-500">Created</p>
                  <p className="font-medium">{transaction.created}</p>
                </div>
                <div>
                  <p className="text-gray-500">Amount</p>
                  <p className="font-medium">
                    {transaction.amount} {transaction.currency}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Role</p>
                  <p className="font-medium">{transaction.role}</p>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-xs text-gray-500 flex justify-between items-center">
              <span>View details</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default TransactionTable


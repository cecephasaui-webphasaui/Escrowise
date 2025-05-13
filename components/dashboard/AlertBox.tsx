"use client"
import type React from "react"
import { AlertCircle } from "lucide-react"

const AlertBox: React.FC = () => {
  return (
    <section className="p-4 sm:p-6 rounded-xl sm:rounded-3xl bg-orange-100">
      <header className="flex gap-2 sm:gap-2.5 items-center mb-3 sm:mb-5">
        <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-700" />
        <h2 className="text-lg sm:text-xl font-bold tracking-tighter text-orange-800">Alert</h2>
      </header>
      <p className="text-base sm:text-lg tracking-tighter text-orange-800">
        <span className="font-bold">Waiting for the seller to review and agree to the transaction.</span> Upon reviewing
        the transaction, the seller may agree or request changes. No action is required from you for now.
      </p>
    </section>
  )
}

export default AlertBox


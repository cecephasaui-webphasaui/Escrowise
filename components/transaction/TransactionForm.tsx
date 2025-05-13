"use client"
import type React from "react"
import { useState } from "react"
import TransactionDetails from "./TransactionDetails"
import TransactionSummary from "./TransactionSummary"
import BuyerDetails from "./BuyerDetails"
import ItemEntryForm from "./ItemEntryForm"

interface Item {
  name: string
  price: string
  description: string
  category: string
}

function TransactionForm() {
  const [formData, setFormData] = useState({
    title: "",
    role: "Buyer",
    currency: "USD",
    inspectionPeriod: "",
    haveBuyer: false,
    agreeTerms: false,
  })

  const [items, setItems] = useState<Item[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const isCheckbox = type === "checkbox"

    setFormData((prev) => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleAddItem = (item: Item) => {
    setItems((prev) => [...prev, item])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData, items)
    // Add form submission logic here
  }

  return (
    <form className="flex flex-col gap-8 sm:gap-10" onSubmit={handleSubmit}>
      <div className="w-full bg-white p-6 sm:p-8 rounded-xl shadow-sm">
        <div className="mb-6 sm:mb-8">
          <label htmlFor="title" className="mb-2 text-base sm:text-lg font-medium tracking-tighter text-black block">
            Transaction Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter a descriptive title for your transaction"
            className="px-4 sm:px-6 py-3 sm:py-4 w-full rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div>
            <label htmlFor="role" className="mb-2 text-base sm:text-lg font-medium tracking-tighter text-black block">
              My Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="px-4 sm:px-6 py-3 sm:py-4 w-full rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all appearance-none"
            >
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>
              <option value="Broker">Broker</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="currency"
              className="mb-2 text-base sm:text-lg font-medium tracking-tighter text-black block"
            >
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="px-4 sm:px-6 py-3 sm:py-4 w-full rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all appearance-none"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CAD">CAD</option>
              <option value="AUD">AUD</option>
              <option value="JPY">JPY</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="inspectionPeriod"
              className="mb-2 text-base sm:text-lg font-medium tracking-tighter text-black block"
            >
              Inspection Period (Days)
            </label>
            <input
              id="inspectionPeriod"
              name="inspectionPeriod"
              type="number"
              min="1"
              max="30"
              value={formData.inspectionPeriod}
              onChange={handleChange}
              placeholder="e.g., 7"
              className="px-4 sm:px-6 py-3 sm:py-4 w-full rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
        <ItemEntryForm onAddItem={handleAddItem} />
      </div>

      {items.length > 0 && (
        <>
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
            <h2 className="mb-5 text-xl sm:text-2xl font-bold tracking-tighter text-black">Added Items</h2>
            <div className="space-y-4">
              {items.map((item, index) => (
                <TransactionDetails
                  key={index}
                  name={item.name}
                  category={item.category}
                  price={item.price}
                  description={item.description}
                  inspectionPeriod={formData.inspectionPeriod}
                />
              ))}
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
            <TransactionSummary items={items} />
          </div>

          <hr className="my-6 sm:my-8 bg-orange-400 h-[2px] border-none" />

          <p className="mb-6 sm:mb-8 text-base sm:text-lg text-center text-black">
            All prices are in {formData.currency}. Taxes may apply.
          </p>

          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
            <BuyerDetails haveBuyer={formData.haveBuyer} agreeTerms={formData.agreeTerms} onChange={handleChange} />
          </div>
        </>
      )}
    </form>
  )
}

export default TransactionForm


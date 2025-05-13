"use client"
import Header from "@/components/dashboard/Header"
import type React from "react"

import WelcomePopup from "@/components/welcome/WelcomePopup"

export default function DashboardPage() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-100">
      <Header />
      <WelcomePopup />

      <div className="flex-1 px-4 sm:px-8 lg:px-16 py-8 sm:py-12 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-black mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Dashboard content */}
          <DashboardCard title="Active Transactions" count={3} icon="📝" href="/dashboard/transactions" />
          <DashboardCard title="Pending Approvals" count={1} icon="⏳" href="/dashboard/approvals" />
          <DashboardCard title="Completed Transactions" count={12} icon="✅" href="/dashboard/completed" />
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <ActivityItem title="Transaction #13090867 created" time="2 hours ago" type="create" />
            <ActivityItem title="Buyer approved transaction #13090866" time="Yesterday" type="approve" />
            <ActivityItem title="Funds released for transaction #13090865" time="3 days ago" type="complete" />
          </div>
        </div>
      </div>
    </main>
  )
}

interface DashboardCardProps {
  title: string
  count: number
  icon: string
  href: string
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, count, icon, href }) => {
  return (
    <a href={href} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-3xl font-bold mt-4 text-orange-500">{count}</p>
    </a>
  )
}

interface ActivityItemProps {
  title: string
  time: string
  type: "create" | "approve" | "complete"
}

const ActivityItem: React.FC<ActivityItemProps> = ({ title, time, type }) => {
  const getColor = () => {
    switch (type) {
      case "create":
        return "bg-blue-100 text-blue-800"
      case "approve":
        return "bg-green-100 text-green-800"
      case "complete":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="py-3 border-b border-gray-100 last:border-0 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${getColor()}`}></div>
        <span className="text-gray-800">{title}</span>
      </div>
      <span className="text-sm text-gray-500">{time}</span>
    </div>
  )
}


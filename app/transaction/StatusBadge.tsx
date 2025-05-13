import type React from "react"

type StatusType = "awaiting-response" | "awaiting-payment" | "completed" | "cancelled"

interface StatusBadgeProps {
  type: StatusType
  text: string
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ type, text }) => {
  const getStatusStyles = () => {
    switch (type) {
      case "awaiting-response":
        return {
          container: "bg-amber-100",
          dot: "bg-amber-600",
          text: "text-amber-800",
        }
      case "awaiting-payment":
        return {
          container: "bg-green-100",
          dot: "bg-green-600",
          text: "text-green-800",
        }
      case "completed":
        return {
          container: "bg-blue-100",
          dot: "bg-blue-600",
          text: "text-blue-800",
        }
      case "cancelled":
        return {
          container: "bg-red-100",
          dot: "bg-red-600",
          text: "text-red-800",
        }
      default:
        return {
          container: "bg-gray-100",
          dot: "bg-gray-600",
          text: "text-gray-800",
        }
    }
  }

  const styles = getStatusStyles()

  return (
    <div className={`inline-flex items-center px-2.5 py-1 rounded-full ${styles.container}`}>
      <div className={`w-1.5 h-1.5 rounded-full ${styles.dot} mr-1.5`}></div>
      <span className={`text-xs font-medium ${styles.text}`}>{text}</span>
    </div>
  )
}

export default StatusBadge


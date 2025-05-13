"use client"
import type React from "react"
import { ShoppingCart, FileText, CreditCard, CheckCircle } from "lucide-react"

interface StepProps {
  icon: React.ReactNode
  title: string
  isActive: boolean
  isCompleted: boolean
  isLast?: boolean
}

const Step: React.FC<StepProps> = ({ icon, title, isActive, isCompleted, isLast = false }) => {
  // Determine the color based on status
  const getColor = () => {
    if (isCompleted || isActive) {
      return "bg-orange-400 text-white"
    }
    return "bg-orange-100 text-orange-300"
  }

  // Determine the line color
  const getLineColor = () => {
    if (isCompleted) {
      return "bg-orange-400"
    }
    return "bg-orange-100"
  }

  return (
    <div className="flex flex-col items-center relative">
      <div className="flex items-center">
        <div className={`flex items-center justify-center w-12 h-12 rounded-full ${getColor()} transition-colors`}>
          {icon}
        </div>
        {!isLast && (
          <div
            className={`w-16 sm:w-24 md:w-32 h-0.5 ${getLineColor()} transition-colors absolute left-[calc(100%_-_6px)]`}
          ></div>
        )}
      </div>
      <div className="mt-3 text-sm text-gray-600 text-center">{title}</div>
    </div>
  )
}

interface ProgressTrackerProps {
  currentStep: number
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ currentStep = 2 }) => {
  const steps = [
    {
      title: "Agreement",
      icon: <ShoppingCart size={20} />,
    },
    {
      title: "Payment",
      icon: <FileText size={20} />,
    },
    {
      title: "Transfer",
      icon: <CreditCard size={20} />,
    },
    {
      title: "Inspection",
      icon: <CheckCircle size={20} />,
    },
    {
      title: "Closed",
      icon: <CheckCircle size={20} />,
    },
  ]

  return (
    <div className="flex justify-between w-full max-w-4xl mx-auto py-6 px-2">
      {steps.map((step, index) => (
        <Step
          key={index}
          icon={step.icon}
          title={step.title}
          isActive={index === currentStep - 1}
          isCompleted={index < currentStep - 1}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  )
}

export default ProgressTracker


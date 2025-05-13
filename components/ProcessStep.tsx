import type React from "react"

interface ProcessStepProps {
  icon: string
  title: string
  description: string
  className?: string
  bgClass?: string
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  icon,
  title,
  description,
  className = "",
  bgClass = "bg-amber-400 bg-opacity-10",
}) => {
  return (
    <div className={`${className} transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20 h-full rounded-xl overflow-hidden`}>
      <div
        className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 ${bgClass} h-full relative overflow-hidden process-step-card`}
      >
        <div className="flex flex-shrink-0 justify-center items-center p-2 bg-zinc-100 h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] rounded-full z-10">
          <img
            src={icon || "/placeholder.svg"}
            alt={title}
            className="object-contain w-[35px] h-[35px] sm:w-[45px] sm:h-[45px]"
          />
        </div>
        <div className="flex flex-col text-black z-10">
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tighter">{title}</h3>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg tracking-tighter">{description}</p>
        </div>
        <div className="animated-shadow"></div>
      </div>
    </div>
  )
}

export default ProcessStep


import type React from "react"
import { Play } from "lucide-react"

const HeroSection: React.FC = () => {
  return (
    <div
      className="px-[30px] w-full rounded-[20px] sm:rounded-[30px] overflow-hidden"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%201-GQ5KZnnaHNXyqwpt8B1aoE3pjrLLgY.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-[30px] relative">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between relative z-10">
          <div className="w-full lg:w-[58%] space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black">
              <span className="text-[#D1AE38]">Secure</span> Your Transactions with Confidence
            </h1>
            <p className="text-base sm:text-lg lg:text-xl tracking-tighter text-black max-w-lg">
              Escrow solutions designed to protect your business deals and ensure safe payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-2 sm:pt-4">
              <button className="px-6 sm:px-12 py-3 sm:py-5 text-base font-bold tracking-tighter text-white bg-orange-400 hover:bg-orange-500 transition-colors rounded-md shadow-sm">
                Get Started
              </button>
              <button className="flex items-center gap-2 text-lg sm:text-xl tracking-tighter text-black">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-400 text-white">
                  <Play size={16} className="ml-0.5" />
                </div>
                Watch user guide
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[38%] mt-6 lg:mt-0">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2013%20%281%29-J6D3pOTttXYmiRmixHOsE11bodGO1D.png"
              alt="Secure transactions illustration"
              className="w-full h-auto object-contain max-w-[400px] mx-auto lg:mx-0"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection


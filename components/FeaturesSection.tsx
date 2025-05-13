import type React from "react"

const FeaturesSection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="w-full lg:w-1/2 order-2 lg:order-1 flex items-center justify-center">
          <div className="h-[300px] sm:h-[400px] lg:h-[530px] w-full bg-stone-50 bg-opacity-60 rounded-[20px] sm:rounded-[30px] flex items-center justify-center p-4 sm:p-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2012-Wqfg4IpEbzkRJtThgStxCv7uwjKMA3.png"
              alt="Security shield with Escrowise logo"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-black">
              Features & Benefits
            </h2>
            <p className="text-base sm:text-lg lg:text-xl tracking-tighter text-black">(Why Escrowise?)</p>

            <div className="space-y-6 sm:space-y-8 w-full mt-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-400 rounded-full mt-2"></div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-black">
                    Secure Transactions
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl tracking-tighter text-black">
                    Funds are only released when both parties agree.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-400 rounded-full mt-2"></div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-black">
                    Dispute Resolution
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl tracking-tighter text-black">
                    Neutral mediation in case of conflicts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-400 rounded-full mt-2"></div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-black">
                    Fast & Transparent
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl tracking-tighter text-black">
                    Track payments in real-time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-400 rounded-full mt-2"></div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-black">
                    Multi-Currency Support
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl tracking-tighter text-black">
                    Transact globally with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection


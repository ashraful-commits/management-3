import React from "react"

export default function Success() {
  return (
    <div className="success_wrap bg-[#141F39] pb-[50px] pt-[40px] text-center md:pt-[50px]">
      <div className="container mx-auto px-5">
        <div className="success pb-7 pt-8 text-[#fff]">
          <div className="col-span-10 pr-[0px] font-medium lg:col-span-5">
            <p className="text-sm uppercase text-[#267596]">Success Numbers</p>
            <h2 className="mb-3 text-[30px] font-semibold capitalize leading-[1.3] sm:text-[34px] md:text-[45px]">
              Quantitative Results
            </h2>
            <p className="mx-auto text-lg text-[#64728F] lg:max-w-[530px]">
              Our quantifiable outcomes, achievements, and metrics signify the
              use of data-driven evidence and statistics to measure the impact
              of performance, progress, and success
            </p>
            <div className="mt-5 grid grid-cols-8 gap-4">
              <div className="col-span-8 sm:col-span-4 lg:col-span-2">
                <h3 className="mt-5 text-[30px] font-semibold md:text-[36px] lg:text-[48px]">
                  90 <span className="text-[#267596]">%</span>
                </h3>
                <p className="px-[0] text-lg leading-[1.3] text-[#64728F] lg:px-[10%]">
                  Productivity Improvements
                </p>
              </div>
              <div className="col-span-8 sm:col-span-4 lg:col-span-2">
                <h3 className="mt-5 text-[30px] font-semibold md:text-[36px] lg:text-[48px]">
                  75 <span className="text-[#267596]">%</span>
                </h3>
                <p className="px-[0] text-lg leading-[1.3] text-[#64728F] lg:px-[10%]">
                  Revenue Growth
                </p>
              </div>
              <div className="col-span-8 sm:col-span-4 lg:col-span-2">
                <h3 className="mt-5 text-[30px] font-semibold md:text-[36px] lg:text-[48px]">
                  99 <span className="text-[#267596]">%</span>
                </h3>
                <p className="px-[0] text-lg leading-[1.3] text-[#64728F] lg:px-[10%]">
                  Customer Acquisition Rates
                </p>
              </div>
              <div className="col-span-8 sm:col-span-4 lg:col-span-2">
                <h3 className="mt-5 text-[30px] font-semibold md:text-[36px] lg:text-[48px]">
                  240 <span className="text-[#267596]">%</span>
                </h3>
                <p className="px-[0] text-lg leading-[1.3] text-[#64728F] lg:px-[10%]">
                  Cost Savings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

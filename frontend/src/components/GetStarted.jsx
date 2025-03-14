export default function HowItWorks() {
    const steps = [
      { id: "01", title: "Create Your Account", description: "Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis." },
      { id: "02", title: "Find A Taxi", description: "Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis." },
      { id: "03", title: "Meet Your Driver", description: "Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis." },
      { id: "04", title: "Enjoy Your Trip", description: "Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis." },
    ];
  
    return (
      <div className="text-center py-12 px-6 bg-white">
        <h2 className="text-4xl font-bold">
          How To <span className="text-yellow-500">Get Started</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Suspendisse ultrice gravida dictum fusce placerat ultricies fusce integer quis auctor elit sed vulputate mi sit.
        </p>
        {/* <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="bg-gray-200 rounded-lg shadow-md p-6 w-auto h-60 text-center relative ">
              <div className="relative bg-yellow-500 text-white w-18 h-16 left-22 bottom-15 text-lg font-bold px-6 py-3 rounded-lg">
                <span>{step.id}</span>
                <div className="absolute top-12  left-1/2 -translate-x-1/2 bg-gray-200 w-6 h-6 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-xl mt-6">{step.title}</h3>
              <p className="text-gray-500 mt-3 text-sm">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute bottom-85 right-[-111px] transform -translate-y-1/2 border-t-2 border-gray-400 w-50"></div>
              )}
            </div>
          ))}
        </div> */}
        
         <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 p-4">
         
      {steps.map((step, index) => (
        <div
          key={step.id}
          className="bg-gray-200 rounded-lg shadow-md p-6 w-full md:w-64 lg:w-80 h-auto md:h-60 text-center relative"
        >
          {/* Step Number */}
          <div className="relative bg-yellow-500 text-white w-16 h-14 mx-auto -top-14 flex items-center justify-center text-lg font-bold rounded-lg">
            <span>{step.id}</span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-200 w-6 h-6 rounded-full"></div>
          </div>

          {/* Step Content */}
          <h3 className="font-semibold text-lg md:text-xl mb-10">{step.title}</h3>
          <p className="text-gray-500 mt-6 text-sm md:text-base">{step.description}</p>

          {/* Connector Line (for larger screens) */}
          {index < steps.length - 1 && (
            <>
            <div className="hidden md:block absolute top-0 left-full transform translate-y-1/2 border-t-1 border-gray-400 w-10 md:w-14 lg:w-18"></div>
              <div class="flex items-center">
          <div class="w-1/3 border-t-0 bottom-0 -pe-7 border-gray-400"></div>
             <div class="w-1/3 border-b border-gray-400"></div>   <svg class="ms-0 w-3 h-4 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
             </svg>
            
          </div>
          </>
         )}
        </div>
      ))}
    </div>
      </div>
    );
  }
  
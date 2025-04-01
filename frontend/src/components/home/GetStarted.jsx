
export default function HowItWorks() {
  const steps = [
    { id: "01", title: "Create Your Account", description: "Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis." },
    { id: "02", title: "Find A Taxi", description: "Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis." },
    { id: "03", title: "Meet Your Driver", description: "Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis." },
    { id: "04", title: "Enjoy Your Trip", description: "Suspendisse ultrice gravida dictum fusce placerat ultricies integer quis." },
  ];

  return (
    <div className="text-center py-18 px-4 md:px-6 lg:px-20 bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-epilogue">
        How To{" "}
        <span className="text-yellow-500 relative inline-block">
          Get Started
          <span className="absolute inset-0 bg-[url('/src/assets/circle.png')] bg-contain bg-center bg-no-repeat"></span>
        </span>
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-10 xl:mb-20">
        Suspendisse ultrice gravida dictum fusce placerat ultricies fusce integer quis auctor elit sed vulputate mi sit.
      </p>

      {/* Steps Container */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-4 xl:gap-8 ">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="bg-[#f8f6f1] rounded-lg shadow-md p-6 w-full sm:w-80 md:w-72 xl:w-68  text-center relative mt-10 md:mt-5 lg:mt-10 xl:mt-0 "
          >

            {/* Step Number */}
            <div className="relative bg-yellow-500 text-white w-20 h-16 mx-auto -top-14 flex items-center justify-center text-lg font-bold rounded-lg">
              <span>{step.id}</span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-100 w-6 h-6 rounded-full"></div>
            </div>

            {/* Step Content */}
            <h3 className="font-semibold text-lg mb-4">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

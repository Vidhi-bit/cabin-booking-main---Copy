import { useState } from "react";

export default function Hero() {
  const [city, setCity] = useState("");
  const [solution, setSolution] = useState("");
  

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-end pb-16"> {/* Added justify-end and pb-16 */}
      {/* Background Video (or Image) */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        {/* You can add more <source> tags for different video formats for broader browser support */}
        Your browser does not support the video tag.
      </video>
      <img
        src="/path/to/your/image.jpg"
        alt="Workspace"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      {/* Main Content Box */}
      {/* Removed w-[750px] for responsiveness. Use max-w instead if you need a max width */}
      <div className="relative z-20 flex flex-col items-center justify-center bg-white bg-opacity-90 p-8 rounded-lg shadow-xl max-w-[900px]">
        <h1 className="text-xl md:text-2xl font-serif font-normal text-gray-800 mb-8 text-center whitespace-nowrap">
          Meet India’s leading premium flexible workspace operator, WeWork
        </h1>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          {/* Select a City Dropdown */}
          <div className="relative flex-1">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-6 py-3 rounded-lg appearance-none bg-white text-gray-700 focus:outline-none"
            >
              <option value="">Select a city*</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l-.707.707L13.586 18l4.293-4.293-.707-.707L13.586 16.586 9.293 12.95zM6 8V6a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 012 2v2a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2a2 2 0 012-2z"></path>
              </svg>
            </div>
          </div>

          {/* Choose a Solution Dropdown */}
          <div className="relative flex-1">
            <select
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              className="w-full px-6 py-3 rounded-lg appearance-none bg-white text-gray-700 focus:outline-none"
            >
              <option value="">Choose a solution*</option>
              <option value="coworking">Coworking</option>
              <option value="enterprise">Enterprise</option>
              <option value="private-office">Private Office</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l-.707.707L13.586 18l4.293-4.293-.707-.707L13.586 16.586 9.293 12.95zM6 8V6a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 012 2v2a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2a2 2 0 012-2z"></path>
              </svg>
            </div>
          </div>

          {/* Explore Button */}
          <button className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-800 focus:outline-none">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
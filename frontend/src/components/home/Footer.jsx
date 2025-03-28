import { FaFacebookF, FaTwitter, FaSkype, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[url('/src/assets/Background.png')] bg-cover bg-center text-white py-10 px-5 sm:px-6 md:px-15 xl:px-30">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="text-yellow-400">🚖</span> TRIPMATE
          </h2>
          <p className="mt-7 text-gray-400 text-sm leading-loose">
            Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold">Our Services:</h3>
          <ul className="mt-7 space-y-3  text-gray-300">
            {['Ride Sharing', 'Taxi Rentals', 'Intercity Service', 'Taxi Reserve'].map(service => (
              <li key={service} className="hover:text-yellow-400 cursor-pointer text-sm ">{service}</li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links:</h3>
          <ul className="mt-7 text-gray-300 space-y-2">
            {['Home', 'Why Choose Us', 'Services', 'Testimonials'].map(link => (
              <li key={link} className="hover:text-color-yellow cursor-pointer text-sm ">{link}</li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold">Newsletter:</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-3 w-full p-2 rounded bg-gray-800 text-white placeholder-gray-500 placeholder:text-sm text-sm"
          />
          <button className="mt-3 w-full bg-color-yellow text-black py-2 rounded font-semibold hover:bg-yellow-600 text-sm">
            Subscribe Now
          </button>
          <div className="mt-2 flex items-center">
            <input type="checkbox" id="agree" className="mr-2" />
            <label htmlFor="agree" className="text-gray-300 text-sm ">I agree to receive emails.</label>
          </div>
        </div>
      </div>

      {/* Social Icons & Copyright */}
      <div className="mt-10 flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6">
        <div className="flex space-x-4 text-gray-400">
          <FaFacebookF className="cursor-pointer hover:text-yellow-400" />
          <FaTwitter className="cursor-pointer hover:text-yellow-400" />
          <FaSkype className="cursor-pointer hover:text-yellow-400" />
          <FaLinkedinIn className="cursor-pointer hover:text-yellow-400" />
        </div>
        <p className="text-gray-400 mt-4 sm:mt-0 text-sm sm:text-base">© All rights reserved. Made by <span className="text-yellow-400">TRIPMATE</span></p>
      </div>
    </footer>
  );
}
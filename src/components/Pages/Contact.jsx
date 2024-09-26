import { FiFacebook, FiInstagram, FiPhoneCall, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <div className="bg-gradient-to-b from-pink-100 via-pink-200 to-pink-100 pt-20 h-full">
      <div className="py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 font-poppins">
          Contact Us
        </h1>
        <p className="text-center text-gray-700 font-roboto">
          We're here to help! Get in touch with us for any questions or support.
        </p>
      </div>
      <div className="max-w-lg mx-auto my-4 p-8 bg-pink-50 shadow-lg rounded-lg">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-roboto">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 font-roboto"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-roboto">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 font-roboto"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-roboto">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 font-roboto"
              placeholder="Your Phone Number (Optional)"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-roboto">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 font-roboto"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 font-poppins"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="text-center mt-8 mb-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 font-poppins">
          Or Contact Us Directly
        </h2>
        <p className="text-gray-600 mt-4 font-roboto flex items-center justify-center gap-2">
          Email:{" "}
          <a
            href="mailto:info@example.com"
            className="text-pink-500 hover:underline flex items-center justify-center gap-2"
          >
            <FiMail />
            info@example.com
          </a>
        </p>
        <p className="text-gray-600 font-roboto flex items-center justify-center gap-2">
          Phone:{" "}
          <a
            href="tel:+1234567890"
            className="text-pink-500 hover:underline flex items-center justify-center gap-2"
          >
            <FiPhoneCall />
            +123 456 7890
          </a>
        </p>
        <p className="text-gray-600 font-roboto">Follow us on social media:</p>
        <div className="flex flex-wrap justify-center space-x-4 mt-4">
          <a
            href="https://www.facebook.com/login"
            className="text-pink-500 hover:text-pink-600 font-roboto flex items-center justify-center gap-2"
          >
            <FiFacebook />
            Facebook
          </a>
          <a
            href="https://x.com/i/flow/login"
            className="text-pink-500 hover:text-pink-600 font-roboto flex items-center justify-center gap-2"
          >
            <FaXTwitter />
            Twitter
          </a>
          <a
            href="https://www.instagram.com/accounts/login/"
            className="text-pink-500 hover:text-pink-600 font-roboto flex items-center justify-center gap-2"
          >
            <FiInstagram />
            Instagram
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center text-sm py-4 bg-pink-100 font-roboto">
        &copy; Copyright {new Date().getFullYear()} by Shopper Inc.
      </div>
    </div>
  );
}

export default Contact;

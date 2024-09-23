import { FiTruck, FiPhone, FiLock, FiAward } from "react-icons/fi";

function Benefits() {
  return (
    <div className="bg-gradient-to-b from-pink-200 via-pink-200 to-pink-100">
      <h1 className="text-4xl font-bold flex items-center justify-center py-7 text-gray-800 font-poppins">
        Why Choose Us
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4 sm:px-10 gap-6 py-7">
        <div className="bg-pink-50 shadow-md rounded-lg p-6 mb-6 hover:shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all">
          <h2 className="text-xl font-semibold text-pink-500 font-roboto flex items-center gap-2">
            <FiTruck />
            Free Shipping
          </h2>
          <p className="text-gray-700 mt-4 font-roboto text-justify">
            Get free shipping on all orders over $50! No hidden fees, just fast
            and reliable delivery straight to your doorstep, no matter where you
            are.
          </p>
        </div>
        <div className="bg-pink-50 shadow-md rounded-lg p-6 mb-6 hover:shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all">
          <h2 className="text-xl font-semibold text-pink-500 font-roboto flex items-center gap-2">
            <FiPhone />
            24/7 Customer Support
          </h2>
          <p className="text-gray-700 mt-4 font-roboto text-justify">
            Our dedicated support team is here for you 24/7. Whether you have a
            question about a product or need help with your order, we’re always
            just a message away.
          </p>
        </div>
        <div className="bg-pink-50 shadow-md rounded-lg p-6 mb-6 hover:shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all">
          <h2 className="text-xl font-semibold text-pink-500 font-roboto flex items-center gap-2">
            <FiLock />
            Secure Payments
          </h2>
          <p className="text-gray-700 mt-4 font-roboto text-justify">
            Your security is our priority. We use advanced encryption technology
            to ensure all your payments are 100% secure and protected from
            fraud.
          </p>
        </div>
        <div className="bg-pink-50 shadow-md rounded-lg p-6 mb-6 hover:shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all">
          <h2 className="text-xl font-semibold text-pink-500 font-roboto flex items-center gap-2">
            <FiAward />
            Quality Guarantee
          </h2>
          <p className="text-gray-700 mt-4 font-roboto text-justify">
            We’re committed to providing only the best. Every product is
            carefully selected to ensure top quality, durability, and style, so
            you can shop with peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;

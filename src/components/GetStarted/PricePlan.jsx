import React from 'react';

const PricingPlan = ({ planName, price, features, buttonText }) => {
  return (
    <div className="px-6 py-4 transition-colors duration-300 transform rounded-lg hover:bg-gray-200">
      <p className="text-lg font-medium text-gray-800">{planName}</p>

      <h4 className="mt-2 text-3xl font-semibold text-gray-800">${price} <span className="text-base font-normal text-gray-600">/ Month</span></h4>

      <p className="mt-4 text-gray-500">For most businesses that want to optimize web queries.</p>

      <div className="mt-8 space-y-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="ff9101">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>

            <span className="mx-4 text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#ff9101] rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        {buttonText}
      </button>
    </div>
  );
};

export default PricingPlan;

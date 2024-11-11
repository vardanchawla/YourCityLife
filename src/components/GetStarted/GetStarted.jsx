import React from 'react';
import PricingPlan from './PricePlan';

const GetStarted = () => {
  const plans = [
    {
      planName: 'Intro',
      price: '19',
      features: ['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users'],
      buttonText: 'Choose plan'
    },
    {
      planName: 'Base',
      price: '39',
      features: ['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users'],
      buttonText: 'Choose plan'
    },
    {
      planName: 'Popular',
      price: '99',
      features: ['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users'],
      buttonText: 'Choose plan'
    },
    {
      planName: 'Enterprise',
      price: '199',
      features: ['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users'],
      buttonText: 'Choose plan'
    }
  ];

  return (
    <div>
      <section className="bg-white">
        <div className="container px-6 py-8 mx-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Simple, transparent pricing</h2>
              <p className="mt-4 text-gray-500">No Contracts. No surprise fees.</p>
            </div>

            <div className="overflow-hidden p-0.5 mt-6 border rounded-lg">
              <div className="sm:-mx-0.5 flex">
                <button className="focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-white bg-[#ff9101] rounded-lg">Monthly</button>
                <button className="focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-gray-800 bg-transparent rounded-lg hover:bg-gray-200">Yearly</button>
              </div>
            </div>
          </div>

          <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {plans.map((plan, index) => (
              <PricingPlan
                key={index}
                planName={plan.planName}
                price={plan.price}
                features={plan.features}
                buttonText={plan.buttonText}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;

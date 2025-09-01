import React from 'react';

const plans = [
  {
    name: 'General Individual',
    price: '$0',
    duration: 'Month',
    description: 'Great for getting started with document risk assessment.',
    features: [
      'Scan up to 100 documents/month',
      'Basic AI risk categorization',
      'Limited compliance score dashboard',
      '1 Integration (e.g. Google Drive)',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Professional Plan',
    price: '$45',
    duration: 'Month',
    description: 'Built for growing teams managing moderate documents.',
    features: [
      'Scan up to 1,000 documents/month',
      'Full risk categorization',
      'Compliance scoring + insights',
      'Up to 3 integrations',
      'Role-based access control',
      'Priority email support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise Plan',
    price: '$79',
    duration: 'Month',
    description: 'Best for large organizations with complex compliance needs.',
    features: [
      'Unlimited document scans',
      'Custom risk rules & alerts',
      'Full compliance & audit reporting',
      'API + SSO access',
      'Dedicated account manager',
      '24/7 priority support',
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="relative py-20 px-6 text-white">
      {/* Background with Radial Gradient and Blue Blur */}
      <div className="absolute inset-0 bg-[radial-gradient(circle, rgba(3,28,60,1) 0%, rgba(0,0,0,1) 80%)] opacity-70 z-0"></div>
      <div className="absolute inset-0 flex justify-end items-bottom pointer-events-none z-10">
        <div className="w-[500px] h-[500px] bg-blue-700 opacity-30 rounded-full blur-[160px]" />
      </div>

      <div className="text-center mb-12 z-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Transparent Plans That <br className="hidden md:block" />
          Scale With Your Risk Need
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Choose the plan that fits your compliance strategy. No hidden fees, no surprises — just reliable document intelligence.
        </p>
      </div>

      {/* Pricing Plans */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto z-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-8 border border-gray-800 bg-gradient-to-b from-white/5 to-white/10 shadow-xl flex flex-col ${
              plan.popular ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            {plan.popular && (
              <span className="absolute top-2 left-1/2 -translate-x-1/2 bg-blue-600 text-xs text-white font-semibold px-3 py-1 rounded-full">
                Popular Plan
              </span>
            )}
            <h3 className="text-lg font-semibold mt-5 mb-1">{plan.name}</h3>
            <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
            <div className="text-4xl font-bold mb-1">{plan.price}</div>
            <div className="text-gray-400 text-sm mb-6">/ {plan.duration}</div>
            <button
              className={`w-full py-2 rounded-md text-sm font-medium transition ${
                plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'border border-white/20 hover:bg-white/10 text-white'
              }`}
            >
              Get Started Now
            </button>
            <ul className="mt-6 space-y-2 text-sm text-gray-300">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-500">✔</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

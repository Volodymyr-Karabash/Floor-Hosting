import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      q: 'How fast is setup?',
      a: 'Server setup is instant. Once payment is complete, your server is ready to go!'
    },
    {
      q: 'Can I upgrade my plan later?',
      a: 'Absolutely! You can upgrade or downgrade your plan at any time.'
    },
    {
      q: 'Is mod support available?',
      a: 'Yes, we support custom mods and modpacks with easy uploads.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept credit cards, PayPal, and cryptocurrencies.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((f, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded">
              <h3 className="text-xl font-semibold mb-2">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
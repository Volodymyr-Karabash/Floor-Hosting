import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Ultra-fast Servers',
      description: 'Top-tier hardware ensures smooth, lag-free gaming.',
    },
    {
      title: 'DDoS Protection',
      description: 'Keep your server safe from attacks with built-in protection.',
    },
    {
      title: '24/7 Customer Support',
      description: 'Get expert help anytime you need it, day or night.',
    },
    {
      title: 'Easy Control Panel',
      description: 'Manage your server with our simple, intuitive dashboard.',
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Why Choose Floor Hosting?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded shadow p-6">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-700">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
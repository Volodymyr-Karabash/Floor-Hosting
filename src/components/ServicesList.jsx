import React from 'react';

const ServicesList = () => {
  const services = [
    {
      name: 'Minecraft Server Hosting',
      details: 'Fully optimized hosting with instant setup and mod support.',
    },
    {
      name: 'Custom Modpack Deployment',
      details: 'Upload and manage your favorite modpacks with ease.',
    },
    {
      name: 'Backup & Restore Tools',
      details: 'Automatic daily backups with one-click restore capability.',
    },
    {
      name: 'Dedicated IPs',
      details: 'Upgrade to a dedicated IP address for branding and convenience.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Our Hosting Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <h3 className="text-2xl font-semibold mb-2">{s.name}</h3>
              <p>{s.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
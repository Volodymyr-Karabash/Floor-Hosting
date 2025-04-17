export default function Services() {
    const services = [
      { name: 'Basic Plan', price: '$5/mo', features: '1 Website, 10GB Storage, Email Support' },
      { name: 'Pro Plan', price: '$15/mo', features: '10 Websites, 100GB Storage, Priority Support' },
      { name: 'Enterprise Plan', price: '$30/mo', features: 'Unlimited Websites, 500GB Storage, 24/7 Support' },
    ];
  
    return (
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Our Hosting Plans</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 w-80 text-center">
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-blue-600 text-lg font-bold mb-4">{service.price}</p>
              <p className="text-gray-600">{service.features}</p>
            </div>
          ))}
        </div>
      </section>
    );
}  
export default function FAQ() {
    const faqs = [
      { question: 'What is Floor Hosting?', answer: 'A powerful web hosting service for all needs.' },
      { question: 'Can I upgrade my plan?', answer: 'Yes, at any time from your dashboard.' },
      { question: 'Do you provide support?', answer: '24/7 support is included in all plans.' },
    ];
  
    return (
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="font-semibold text-xl">{faq.question}</h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
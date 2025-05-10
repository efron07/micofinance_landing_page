import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialProps } from '../types';

const SocialProof: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "SmartFinance transformed our operations. We've increased our loan processing speed by 65% and significantly improved our collection rates.",
      author: "Sarah Johnson",
      position: "Operations Director",
      company: "Bright Future Microfinance"
    },
    {
      quote: "The comprehensive reporting features have made regulatory compliance so much easier. I can generate BOT reports with just a few clicks.",
      author: "Michael Chen",
      position: "Finance Manager",
      company: "Community Growth MFC"
    },
    {
      quote: "Having our loan management, accounting, and HR in one system has streamlined everything. Our team is more productive and our clients are happier.",
      author: "Amina Patel",
      position: "CEO",
      company: "Uplift Microfinance Ltd"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Microfinance Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what industry leaders are saying about their experience with SmartFinance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md relative hover:shadow-lg transition-shadow">
              <div className="text-yellow-500 flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-xl">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-70">
          {/* Placeholder for client logos */}
          {[...Array(5)].map((_, index) => (
            <div key={index} className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-semibold">
              Client Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
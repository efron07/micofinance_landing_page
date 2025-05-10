import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './common/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxQTRCRkYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTRNMTQgMTRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTQiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Empower Your Microfinance Operations with SmartFinance
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-lg">
              The Integrated Software Solution for Seamless Loan Tracking, Efficient Collections, and Complete Financial & HR Management.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" variant="secondary" className="group">
                Request a Free Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Learn How SmartFinance Works
              </Button>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm">
            <div className="aspect-video bg-gradient-to-tr from-blue-700/80 to-teal-600/80 rounded-lg flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/7681096/pexels-photo-7681096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="SmartFinance Dashboard" 
                className="w-full h-full object-cover mix-blend-overlay opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="SmartFinance Interface" 
                    className="w-full max-w-md rounded shadow-inner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
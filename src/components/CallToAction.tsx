import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import Button from './common/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Microfinance Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a free demo to see how SmartFinance can streamline your business processes and improve your bottom line.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <a href="mailto:info@smartfinance.com" className="hover:underline">info@smartfinance.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <a href="tel:+1234567890" className="hover:underline">+123 456 7890</a>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Request a Free Demo</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-white placeholder-blue-200"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">Company Name</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-white placeholder-blue-200"
                  placeholder="Your MFC"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-white placeholder-blue-200"
                  placeholder="john@yourmfc.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-white placeholder-blue-200"
                  placeholder="+123 456 7890"
                />
              </div>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full mt-4 group"
              >
                Schedule Your Demo <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
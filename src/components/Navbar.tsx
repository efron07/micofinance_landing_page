import React from 'react';
// Assuming your Button component path is correct relative to Navbar.tsx
import Button from './common/Button';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-6 sticky top-0 z-50"> {/* Added background, padding, sticky positioning, and z-index */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="text-2xl font-bold text-white">SmartFinance</span>
          {/* Replace with your actual logo image if you have one */}
          {/* <img className="h-8 w-auto" src="/path/to/your/logo.png" alt="SmartFinance Logo" /> */}
        </div>

        {/* Navigation Links (Hidden on small screens, visible on medium and up) */}
        {/* Consider making these links dynamic if they change */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-blue-100 hover:text-white transition-colors">Features</a>
          <a href="#" className="text-blue-100 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-blue-100 hover:text-white transition-colors">About Us</a>
          <a href="#" className="text-blue-100 hover:text-white transition-colors">Contact</a>
        </div>

        {/* Buttons (Hidden on small screens, visible on medium and up) */}
        {/* Consider making button actions dynamic props if needed */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Assuming your Button component handles variants like 'outline' and 'secondary' */}
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
            Request a Free Demo
            
          </Button>
          {/* Reusing the secondary button style, potentially for 'Get Started' or similar */}
          <Button variant="secondary" className="group"> {/* Use appropriate variant/styling */}
            Learn More
           
          </Button>
        </div>

        {/* Mobile Menu Button (Placeholder - requires implementation) */}
         {/* You would typically add a button here to toggle a mobile menu */}
         {/* <div className="md:hidden">
           <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
           </button>
         </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
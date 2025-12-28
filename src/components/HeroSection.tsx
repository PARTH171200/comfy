import React from 'react';
// Make sure to install Remix Icons if you haven't: npm install remixicon
import 'remixicon/fonts/remixicon.css'; 
import Coverlogo from '../assets/logo4.png'; // Replace with your logo path
import back from '../assets/back.jpg';

const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden font-sans">
      
      {/* --- Background Layer --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={back} // Replace with your image source
          alt="Premium Bedroom"
          className="w-full h-full object-cover object-center animate-scale-slow"
        />
        {/* Gradient Overlay: Darker at bottom/left for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32 w-full flex flex-col justify-center h-full">
        <div className="max-w-3xl">
          
          {/* Logo Badge */}
          <div className="animate-fade-in-up opacity-0">
            <div className="inline-block mb-10 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
              <img
                src={Coverlogo} // Replace with your logo source
                alt="Comfy Mattresses"
                className="h-16 md:h-24 w-auto drop-shadow-xl"
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up opacity-0 [animation-delay:100ms] text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] font-serif drop-shadow-lg">
            Feel the Comfort.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-100">
              Get Rid of Exhaustion.
            </span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-in-up opacity-0 [animation-delay:200ms] text-lg md:text-xl text-slate-200 mb-12 leading-relaxed max-w-xl font-light tracking-wide border-l-4 border-amber-400 pl-6">
            Comfy mattresses crafted to provide deeper sleep, superior ergonomic support, 
            and long-lasting comfort for every lifestyle.
          </p>

          {/* Buttons Group */}
          <div className="animate-fade-in-up opacity-0 [animation-delay:300ms] flex flex-col sm:flex-row gap-5">
            
            {/* Primary Button */}
            <button
              onClick={() => scrollToSection('products')}
              className="group relative bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-amber-400/20 hover:bg-amber-300 hover:shadow-amber-400/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Explore Mattresses
              <i className="ri-arrow-right-line text-xl transition-transform duration-300 group-hover:translate-x-1"></i>
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 rounded-full font-semibold text-base text-white border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-blue-900 hover:border-white transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Call for Assistance
              <i className="ri-phone-line text-xl transition-transform duration-300 group-hover:rotate-12"></i>
            </button>
          </div>
        </div>
      </div>

      {/* --- Trust Badges (Floating Bottom Right) --- */}
      <div className="absolute bottom-0 right-0 w-full p-6 md:p-10 pointer-events-none z-20 flex flex-col md:flex-row justify-end items-end gap-4">
        
        {/* Badge 1 */}
        <div className="pointer-events-auto animate-fade-in-up opacity-0 [animation-delay:400ms] group bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-4 hover:bg-white/20 transition-all cursor-default">
          <div className="bg-white/90 w-10 h-10 rounded-full flex items-center justify-center text-blue-900 shadow-inner">
            <i className="ri-shield-check-line text-xl"></i>
          </div>
          <div className="flex flex-col">
              <span className="text-[10px] text-slate-300 uppercase tracking-widest font-bold">Guarantee</span>
              <span className="text-sm font-bold text-white">10 Year Warranty</span>
          </div>
        </div>

        {/* Badge 2 */}
        <div className="pointer-events-auto animate-fade-in-up opacity-0 [animation-delay:500ms] group bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-4 hover:bg-white/20 transition-all cursor-default">
          <div className="bg-white/90 w-10 h-10 rounded-full flex items-center justify-center text-blue-900 shadow-inner">
            <i className="ri-truck-line text-xl"></i>
          </div>
          <div className="flex flex-col">
              <span className="text-[10px] text-slate-300 uppercase tracking-widest font-bold">Shipping</span>
              <span className="text-sm font-bold text-white">Free Delivery</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
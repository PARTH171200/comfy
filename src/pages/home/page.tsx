import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import back from '../../assets/back.jpg';
import { products } from '@/data/products';

import { Link } from 'react-router-dom';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle navbar scroll effect

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);



  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div
  className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#FFD54F] to-[#FFC107]"
  style={{ width: `${scrollProgress}%` }}
/>

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img
  src={logo}
  alt="Comfy Mattresses"
  className="h-14 md:h-16 w-auto object-contain drop-shadow-lg"
/>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                isScrolled ? 'text-gray-700 hover:text-[#1E3A8A]' : 'text-white hover:text-[#FFD54F]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                isScrolled ? 'text-gray-700 hover:text-[#1E3A8A]' : 'text-white hover:text-[#FFD54F]'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                isScrolled ? 'text-gray-700 hover:text-[#1E3A8A]' : 'text-white hover:text-[#FFD54F]'
              }`}
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                isScrolled ? 'text-gray-700 hover:text-[#1E3A8A]' : 'text-white hover:text-[#FFD54F]'
              }`}
            >
              Contact
            </button>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[#FFD54F] text-[#1E3A8A] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#FFC107] transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={back}
            alt="Premium Bedroom"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/95 via-[#1E3A8A]/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-2xl">
            <img
              src="https://static.readdy.ai/image/02a8611c5df361eb312f9b61ff56b49b/88e91527691e46e5fadd6202ceaef3bc.jpeg"
              alt="Comfy Mattresses"
              className="h-20 w-auto mb-12"
            />
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight font-['Playfair_Display',serif]">
  Feel the Comfort.<br />Get Rid of Exhaustion.
</h1>

<p className="text-lg md:text-xl text-[#FFE5A0] mb-12 leading-relaxed max-w-xl">
  Comfy mattresses are crafted to provide deeper sleep, superior support,
  and long-lasting comfort for every lifestyle.
</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('products')}
                className="bg-[#FFD54F] text-[#1E3A8A] px-8 py-4 rounded-full font-semibold text-base hover:bg-[#FFC107] transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                Explore Mattresses
                <i className="ri-arrow-right-line text-xl"></i>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white hover:text-[#1E3A8A] transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                Call for Assistance
                <i className="ri-phone-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="absolute bottom-8 right-8 flex gap-3 z-10">
          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
            <i className="ri-shield-check-line text-[#1E3A8A] text-lg"></i>
            <span className="text-sm font-semibold text-[#1E3A8A] whitespace-nowrap">10 Year Warranty</span>
          </div>
          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
            <i className="ri-truck-line text-[#1E3A8A] text-lg"></i>
            <span className="text-sm font-semibold text-[#1E3A8A] whitespace-nowrap">Free Delivery</span>
          </div>
        </div>
      </section>

      {/* Why Comfy Mattresses Section */}
      <section id="why-us" className="py-24 bg-gradient-radial from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-[#2563EB] rounded-full"></div>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="text-5xl font-bold text-[#1E3A8A] mb-4 font-['Playfair_Display',serif]">
              Designed for Your Best Sleep
            </h2>
            <p className="text-base text-gray-600">Every detail crafted with care for Indian families</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'ri-heart-pulse-line',
                title: 'Orthopedic Support',
                description: 'Scientifically designed to align your spine and relieve pressure points for pain-free mornings.',
              },
              {
                icon: 'ri-stack-line',
                title: 'Premium Foam Technology',
                description: 'Multi-layer high-density foam that adapts to your body shape for personalized comfort.',
              },
              {
                icon: 'ri-temp-cold-line',
                title: 'Breathable & Temperature Balanced',
                description: 'Advanced airflow technology keeps you cool in summer and cozy in winter.',
              },
              {
                icon: 'ri-time-line',
                title: 'Durable & Long-Lasting',
                description: 'Premium materials tested for 10+ years of consistent comfort and support.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-[340px] flex flex-col"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#FFD54F] to-[#FFC107] rounded-full flex items-center justify-center mb-6">
                  <i className={`${feature.icon} text-4xl text-[#1E3A8A]`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Product Highlights Section */}
      {/* Our Mattress Collection */}
{/* Our Mattress Collection */}
<section
  id="products"
  className="py-28 bg-gradient-to-b from-[#FAF8F5] to-[#F5F2ED]"
>
  <div className="max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-20">
      <span className="inline-block text-sm font-semibold tracking-widest text-[#FFD54F] mb-3">
        OUR RANGE
      </span>
      <h2 className="text-5xl font-bold text-[#1E3A8A] font-['Playfair_Display',serif] mb-4">
        Our Mattress Collection
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Explore our complete range of mattresses designed for comfort,
        durability, and healthy sleep.
      </p>
    </div>

    {/* Products Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {products.map((product) => (
        <div
          key={product.slug}
          className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
        >
          {/* Mattress Image */}
          <div className="w-full h-56 bg-[#F9FAFB] flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Card Content */}
          <div className="p-8">
            {/* Category */}
            <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold bg-[#FFD54F]/20 text-[#1E3A8A]">
              {product.category}
            </span>

            {/* Name */}
            <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#1E3A8A]">
                {product.warranty}
              </span>

              <Link
                to={`/products/${product.slug}`}
                className="px-5 py-2 rounded-full border-2 border-[#1E3A8A] text-[#1E3A8A] font-semibold hover:bg-[#1E3A8A] hover:text-white transition-all"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



<section className="py-24 bg-[#FAFAFA]">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-[#1E3A8A] mb-12 font-['Playfair_Display',serif]">
      Sleep Accessories
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        'Memory Pillow',
        'Latex Pillow',
        'Rollable Mattress',
        'Folding Mattress',
        'Neck Care',
        'Cushions',
        'Comforter',
        'Protector',
      ].map((item) => (
        <div key={item} className="bg-white p-6 rounded-2xl shadow text-center">
          <p className="font-semibold text-[#1E3A8A]">{item}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Customer Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-[#F0F4FF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-[#FFD54F] rounded-full"></div>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Customer Stories</span>
            </div>
            <h2 className="text-5xl font-bold text-[#1E3A8A] mb-4 font-['Playfair_Display',serif]">
              Why Families Trust Us
            </h2>
            <p className="text-base text-gray-600">Real experiences from real customers across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              {
                rating: 5,
                headline: 'Best investment for my back pain',
                review:
                  'After years of struggling with back pain, the orthopedic mattress has been a game-changer. I wake up feeling refreshed and pain-free. The quality is outstanding and worth every rupee.',
                name: 'Rajesh Kumar',
                city: 'Mumbai',
                avatar: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20man%20in%20his%2040s%20with%20warm%20smile%20wearing%20casual%20shirt%20friendly%20approachable%20expression%20clean%20simple%20soft%20beige%20background%20natural%20lighting%20portrait%20photography%20genuine%20happy%20customer%20testimonial%20photo&width=200&height=200&seq=avatar-rajesh-001&orientation=squarish',
              },
              {
                rating: 5,
                headline: 'My kids sleep so peacefully now',
                review:
                  'We bought two mattresses for our children and the difference is incredible. They fall asleep faster and sleep through the night. The breathable material keeps them comfortable even in summer.',
                name: 'Priya Sharma',
                city: 'Delhi',
                avatar: 'https://readdy.ai/api/search-image?query=Indian%20woman%20in%20her%2030s%20with%20genuine%20warm%20smile%20wearing%20traditional%20kurta%20friendly%20motherly%20expression%20clean%20simple%20soft%20beige%20background%20natural%20lighting%20portrait%20photography%20happy%20satisfied%20customer%20testimonial&width=200&height=200&seq=avatar-priya-002&orientation=squarish',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-[#FFD54F] text-xl"></i>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-[#1E3A8A] mb-4">{testimonial.headline}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{testimonial.review}</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1E3A8A]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <i className="ri-map-pin-line"></i>
                      {testimonial.city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-[#FFD54F] text-xl"></i>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-4">
                Exceptional quality and value for money
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I researched for months before choosing Comfy Mattresses and I'm so glad I did. The luxury comfort
                mattress feels like sleeping on a cloud. The customer service was excellent, delivery was prompt, and
                the 10-year warranty gives me peace of mind. Highly recommend to anyone looking for premium quality at
                reasonable prices.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Indian%20man%20in%20his%2050s%20with%20confident%20smile%20wearing%20business%20casual%20attire%20professional%20trustworthy%20expression%20clean%20simple%20soft%20beige%20background%20natural%20lighting%20portrait%20photography%20satisfied%20customer%20testimonial%20photo&width=200&height=200&seq=avatar-amit-003&orientation=squarish"
                    alt="Amit Patel"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#1E3A8A]">Amit Patel</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <i className="ri-map-pin-line"></i>
                    Bangalore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Promise Section */}
      <section className="py-24 bg-[#1E3A8A] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#2563EB]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <i className="ri-double-quotes-l text-6xl text-[#FFD54F] mb-8 inline-block"></i>
          <p className="text-3xl md:text-4xl text-white leading-relaxed mb-8 font-['Playfair_Display',serif]">
            At Comfy Mattresses, we believe your bed should feel like home. Crafted with care, tested for comfort, and
            trusted by families.
          </p>
          <div className="w-16 h-1 bg-[#FFD54F] mx-auto mb-8"></div>
          <p className="text-lg text-[#FFE5A0] italic">— Team Comfy</p>
        </div>
      </section>
<section id="about" className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="text-4xl font-bold text-[#1E3A8A] mb-6 font-['Playfair_Display',serif]">
        About Comfy Mattresses
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Comfy is a trusted brand dedicated to providing deeper sleep
        through technologically advanced mattresses designed for every
        stage of life.
      </p>
      <p className="text-gray-600 leading-relaxed">
        With innovative materials, scientific sleep research, and
        exceptional craftsmanship, Comfy ensures every night is
        comfortable, healthy, and refreshing.
      </p>
    </div>

    <div className="bg-[#FFD54F]/10 p-8 rounded-3xl">
      <ul className="space-y-4 text-[#1E3A8A] font-semibold">
        <li>✔ Advanced Sleep Technology</li>
        <li>✔ Tested for Health & Hygiene</li>
        <li>✔ Designed for Indian Sleepers</li>
        <li>✔ Long-lasting Durability</li>
      </ul>
    </div>
  </div>
</section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M40,100 Q60,60 100,60 T160,100 Q140,140 100,140 T40,100"
              fill="white"
              opacity="0.3"
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-['Playfair_Display',serif]">
            Your Sleeping Lap<br />Awaits
          </h2>
          <p className="text-xl text-[#FFE5A0] mb-12">
            Experience the comfort you deserve. Connect with us today.
          </p>

          {/* Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto mb-8">
            <form
              id="contact-form"
              data-readdy-form
              action="https://readdy.ai/api/form/d51uh8ja2jsd7vukg040"
              method="POST"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                
                // Validate required fields
                const name = formData.get('name') as string;
                const phone = formData.get('phone') as string;
                const message = formData.get('message') as string;
                
                if (!name || !phone || !message) {
                  alert('Please fill in all required fields');
                  return;
                }
                
                // Validate textarea length
                if (message.length > 500) {
                  alert('Message must be 500 characters or less');
                  return;
                }

                // Submit using application/x-www-form-urlencoded
                const urlEncodedData = new URLSearchParams();
                formData.forEach((value, key) => {
                  urlEncodedData.append(key, value.toString());
                });

                fetch('https://readdy.ai/api/form/d51uh8ja2jsd7vukg040', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: urlEncodedData.toString(),
                })
                  .then((response) => {
                    if (response.ok) {
                      alert('Thank you! We will contact you soon.');
                      form.reset();
                    } else {
                      alert('Something went wrong. Please try again.');
                    }
                  })
                  .catch(() => {
                    alert('Something went wrong. Please try again.');
                  });
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <label htmlFor="name" className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] focus:outline-none transition-colors text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="text-left">
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] focus:outline-none transition-colors text-sm"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              <div className="mb-6 text-left">
                <label htmlFor="email" className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] focus:outline-none transition-colors text-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6 text-left">
                <label htmlFor="message" className="block text-sm font-semibold text-[#1E3A8A] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] focus:outline-none transition-colors resize-none text-sm"
                  placeholder="Tell us about your requirements..."
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">Maximum 500 characters</p>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FFD54F] text-[#1E3A8A] py-4 rounded-full font-bold text-base hover:bg-[#FFC107] transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-send-plane-fill text-xl"></i>
                Contact Us Today
              </button>
            </form>
          </div>

          <div className="text-center">
            <p className="text-sm text-[#FFE5A0] mb-2">Call anytime</p>
            <a
              href="tel:+919876543210"
              className="text-2xl md:text-3xl font-bold text-white hover:text-[#FFD54F] transition-colors cursor-pointer"
            >
              +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F9FAFB] border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Left Column */}
            <div>
              <img
                src="https://static.readdy.ai/image/02a8611c5df361eb312f9b61ff56b49b/88e91527691e46e5fadd6202ceaef3bc.jpeg"
                alt="Comfy Mattresses"
                className="h-12 w-auto mb-4"
              />
              <p className="text-base text-gray-600 italic mb-4 font-['Playfair_Display',serif]">
                Your's Sleeping Lap
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Premium mattresses crafted with care for Indian families. Experience comfort, quality, and trust in
                every sleep.
              </p>
            </div>

            {/* Middle Column */}
            <div>
              <h3 className="text-sm font-bold text-[#1E3A8A] uppercase tracking-wider mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => scrollToSection('hero')}
                    className="text-gray-600 hover:text-[#1E3A8A] hover:underline transition-colors cursor-pointer text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="text-gray-600 hover:text-[#1E3A8A] hover:underline transition-colors cursor-pointer text-left"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('why-us')}
                    className="text-gray-600 hover:text-[#1E3A8A] hover:underline transition-colors cursor-pointer text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-600 hover:text-[#1E3A8A] hover:underline transition-colors cursor-pointer text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-sm font-bold text-[#1E3A8A] uppercase tracking-wider mb-6">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <i className="ri-phone-line text-[#2563EB] text-lg"></i>
                  <a href="tel:+919876543210" className="hover:text-[#1E3A8A] transition-colors cursor-pointer">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600">
                  <i className="ri-mail-line text-[#2563EB] text-lg"></i>
                  <a
                    href="mailto:info@comfymattresses.com"
                    className="hover:text-[#1E3A8A] transition-colors cursor-pointer"
                  >
                    info@comfymattresses.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <i className="ri-map-pin-line text-[#2563EB] text-lg mt-0.5"></i>
                  <span>
                    123 Sleep Street, Comfort Nagar,<br />
                    Hyderabad, Telangana, India - 500081
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2025 Comfy Mattresses. All rights reserved.</p>
            <a
              href="https://readdy.ai/?ref=logo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-[#1E3A8A] transition-colors cursor-pointer"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

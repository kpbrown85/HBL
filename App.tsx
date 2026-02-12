
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Mail, Phone, MapPin, Calculator, Camera, Info, Tent, Home, HelpCircle } from 'lucide-react';
import HomeView from './views/HomeView';
import LlamaInfoView from './views/LlamaInfoView';
import RentalsView from './views/RentalsView';
import BookingView from './views/BookingView';
import GalleryView from './views/GalleryView';
import PackingView from './views/PackingView';
import FaqView from './views/FaqView';

// REPLACE THIS URL with your actual logo file path (e.g., "/images/logo.svg")
const LOGO_URL = ""; 

const Logo = ({ className = "h-10 w-auto", light = false }) => {
  if (LOGO_URL) {
    return <img src={LOGO_URL} alt="Helena Backcountry Llamas Logo" className={className} />;
  }
  return (
    <div className="flex items-center space-x-2 group">
      <div className={`${light ? 'bg-emerald-500' : 'bg-emerald-800'} p-2 rounded-lg transition-transform group-hover:scale-110`}>
        <Tent className="text-white h-6 w-6" />
      </div>
      <span className={`text-xl font-bold tracking-tight ${light ? 'text-white' : 'text-stone-900'}`}>
        HELENA <span className={light ? 'text-emerald-400' : 'text-emerald-800'}>BACKCOUNTRY</span> LLAMAS
      </span>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-stone-600 hover:text-emerald-800 font-medium transition-colors">Home</Link>
            <Link to="/about-llamas" className="text-stone-600 hover:text-emerald-800 font-medium transition-colors">The Herd</Link>
            <Link to="/packing" className="text-stone-600 hover:text-emerald-800 font-medium transition-colors">Why Llamas?</Link>
            <Link to="/rentals" className="text-stone-600 hover:text-emerald-800 font-medium transition-colors">Rentals</Link>
            <Link to="/gallery" className="text-stone-600 hover:text-emerald-800 font-medium transition-colors">Gallery</Link>
            <Link to="/faq" className="text-stone-600 hover:text-emerald-800 font-medium transition-colors">FAQ</Link>
            <Link to="/booking" className="bg-emerald-800 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-emerald-900 transition-all transform hover:scale-105 active:scale-95 shadow-md">
              Book Your Trip
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600 hover:text-emerald-800">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-stone-50 border-b border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-stone-700 hover:text-emerald-800 font-medium">Home</Link>
            <Link to="/about-llamas" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-stone-700 hover:text-emerald-800 font-medium">The Herd</Link>
            <Link to="/packing" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-stone-700 hover:text-emerald-800 font-medium">Why Llamas?</Link>
            <Link to="/rentals" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-stone-700 hover:text-emerald-800 font-medium">Rentals</Link>
            <Link to="/gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-stone-700 hover:text-emerald-800 font-medium">Gallery</Link>
            <Link to="/faq" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-stone-700 hover:text-emerald-800 font-medium">FAQ</Link>
            <Link to="/booking" onClick={() => setIsOpen(false)} className="block px-3 py-2 bg-emerald-800 text-white rounded-md mt-4 text-center">Book Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-stone-900 text-stone-300 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="mb-6">
            <Logo light className="h-12 w-auto" />
          </div>
          <p className="mb-6 max-w-md">
            Providing rugged, reliable backcountry companions for those seeking to explore the deep wilderness of Montana. From hunting expeditions to family backpacking, our llamas carry the weight so you can enjoy the journey.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-emerald-500 transition-colors"><Instagram /></a>
            <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook /></a>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link to="/about-llamas" className="hover:text-emerald-500 transition-colors">Our Herd</Link></li>
            <li><Link to="/rentals" className="hover:text-emerald-500 transition-colors">Pricing & Gear</Link></li>
            <li><Link to="/packing" className="hover:text-emerald-500 transition-colors">Packing Tips</Link></li>
            <li><Link to="/faq" className="hover:text-emerald-500 transition-colors">FAQ</Link></li>
            <li><Link to="/booking" className="hover:text-emerald-500 transition-colors">Availability</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <span>310 Lumo Gulch Rd<br />Clancy, MT 59634</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <span>801-372-0353</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <span className="break-all">kevin.paul.brown@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-stone-800 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} Helena Backcountry Llamas. All rights reserved. Registered Montana Outfitter Assistant.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about-llamas" element={<LlamaInfoView />} />
            <Route path="/rentals" element={<RentalsView />} />
            <Route path="/booking" element={<BookingView />} />
            <Route path="/gallery" element={<GalleryView />} />
            <Route path="/packing" element={<PackingView />} />
            <Route path="/faq" element={<FaqView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

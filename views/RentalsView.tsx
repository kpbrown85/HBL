
import React from 'react';
import { PRICING } from '../constants';
import { Check, DollarSign, Info, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RentalsView() {
  return (
    <div className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            We keep our rates straightforward so you can focus on planning your next Montana wilderness adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Base Rate */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-stone-200 flex flex-col">
            <div className="mb-6">
              <span className="text-stone-500 font-medium uppercase tracking-widest text-sm">Llama Rental</span>
              <div className="flex items-baseline mt-2">
                <span className="text-5xl font-bold">${PRICING.DAILY_LLAMA_RATE}</span>
                <span className="text-stone-500 ml-2">/day/llama</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3">
                <Check className="text-emerald-600 h-5 w-5" />
                <span className="text-stone-700">Minimum 2 Llamas per trip</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-emerald-600 h-5 w-5" />
                <span className="text-stone-700">Panniers & Halters included</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-emerald-600 h-5 w-5" />
                <span className="text-stone-700 text-emerald-800 font-bold">10% Off trips {'>'} 5 days</span>
              </li>
            </ul>
            <Link to="/booking" className="w-full py-4 px-6 bg-stone-900 text-white rounded-xl font-bold text-center hover:bg-stone-800 transition-colors">
              Book Llamas
            </Link>
          </div>

          {/* Trailer Rental */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-stone-200 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-100 text-emerald-800 px-4 py-1 rounded-bl-xl text-sm font-bold">
              Optional
            </div>
            <div className="mb-6">
              <span className="text-stone-500 font-medium uppercase tracking-widest text-sm">Trailer Rental</span>
              <div className="flex items-baseline mt-2">
                <span className="text-5xl font-bold">${PRICING.TRAILER_DAILY_RATE}</span>
                <span className="text-stone-500 ml-2">/day</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3">
                <Check className="text-emerald-600 h-5 w-5" />
                <span className="text-stone-700">Fits up to 4-6 llamas</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-emerald-600 h-5 w-5" />
                <span className="text-stone-700">2" Ball hitch required</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-emerald-600 h-5 w-5" />
                <span className="text-stone-700">Cleaned & sanitized after use</span>
              </li>
            </ul>
            <button className="w-full py-4 px-6 border-2 border-stone-900 text-stone-900 rounded-xl font-bold text-center hover:bg-stone-50 transition-colors">
              Add to Booking
            </button>
          </div>

          {/* Training Clinic */}
          <div className="bg-emerald-900 p-10 rounded-3xl shadow-xl text-white flex flex-col">
            <div className="mb-6">
              <span className="text-emerald-300 font-medium uppercase tracking-widest text-sm">Mandatory for New Packers</span>
              <div className="flex items-baseline mt-2">
                <span className="text-5xl font-bold">${PRICING.CLINIC_FEE}</span>
                <span className="text-emerald-300 ml-2">one-time</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3">
                <Check className="text-emerald-400 h-5 w-5" />
                <span className="text-emerald-100">Llama behavior & handling</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-emerald-400 h-5 w-5" />
                <span className="text-emerald-100">Proper saddling & loading</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-emerald-400 h-5 w-5" />
                <span className="text-emerald-100">Trail safety & LNT principles</span>
              </li>
            </ul>
            <div className="bg-white/10 p-4 rounded-xl text-sm italic">
              "We took the clinic last summer—essential for anyone new to llamas!" - The Miller Family
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 flex items-start gap-6">
          <AlertTriangle className="text-amber-600 h-10 w-10 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">Important Rental Notes</h3>
            <ul className="text-amber-800 space-y-2 list-disc ml-4">
              <li>Damage deposit of $250 required for all rentals (refundable).</li>
              <li>Weight limit strictly enforced: 80 lbs total (40 lbs per side).</li>
              <li>You must have a vehicle capable of towing if renting a trailer.</li>
              <li>Pick-up and drop-off times are strictly 8:00 AM - 10:00 AM unless arranged.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

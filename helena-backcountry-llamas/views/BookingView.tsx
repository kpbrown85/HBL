
import React, { useState, useEffect } from 'react';
import { PRICING } from '../constants';
import { BookingRequest, PricingBreakdown } from '../types';
import { 
  Calendar, 
  Users, 
  Truck, 
  Sparkles, 
  Send, 
  CheckCircle, 
  Calculator, 
  Info,
  Clock,
  ArrowRight,
  Tag
} from 'lucide-react';

export default function BookingView() {
  const [formData, setFormData] = useState<BookingRequest>({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
    numLlamas: 2,
    trailerNeeded: false,
    isFirstTime: true,
    message: ''
  });

  const [pricing, setPricing] = useState<PricingBreakdown | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dateError, setDateError] = useState<string | null>(null);

  useEffect(() => {
    calculatePrice();
  }, [formData]);

  const calculatePrice = () => {
    if (!formData.startDate || !formData.endDate) {
      setPricing(null);
      return;
    }

    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    
    if (end < start) {
      setDateError("End date cannot be before start date.");
      setPricing(null);
      return;
    } else {
      setDateError(null);
    }

    const diffTime = Math.abs(end.getTime() - start.getTime());
    // Adding 1 because if you start Monday and end Tuesday, that's usually 2 days of rental use
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

    let dailyRate = PRICING.DAILY_LLAMA_RATE;
    let discountAmount = 0;

    const baseLlamaCost = days * formData.numLlamas * dailyRate;

    if (days > PRICING.LONG_TRIP_THRESHOLD) {
      discountAmount = baseLlamaCost * (PRICING.LONG_TRIP_DISCOUNT_PERCENT / 100);
    }

    const llamaCost = baseLlamaCost - discountAmount;
    const trailerCost = formData.trailerNeeded ? days * PRICING.TRAILER_DAILY_RATE : 0;
    const clinicFee = formData.isFirstTime ? PRICING.CLINIC_FEE : 0;
    const total = llamaCost + trailerCost + clinicFee;

    setPricing({
      days,
      llamaCost: baseLlamaCost, // Keep original for breakdown display
      trailerCost,
      clinicFee,
      discountAmount,
      total
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dateError || isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="py-24 max-w-2xl mx-auto px-4 text-center">
        <div className="bg-emerald-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="text-emerald-700 h-12 w-12" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Request Received!</h1>
        <p className="text-xl text-stone-600 mb-10 leading-relaxed">
          Thanks for reaching out, {formData.name.split(' ')[0]}! We'll review our herd availability for your dates and get back to you within 24 hours to confirm your booking and send a formal invoice.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-stone-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-stone-800 transition-all"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form Side */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Booking</span>
              <h1 className="text-4xl font-bold">Secure Your Dates</h1>
            </div>
            <p className="text-stone-600 mb-10 text-lg">
              Our pack teams book up quickly during peak hunting and summer backpacking seasons. Submit your request today to hold your spot in the herd.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-emerald-700" />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. John Doe"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all disabled:opacity-50"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all disabled:opacity-50"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="(406) 555-0123"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all disabled:opacity-50"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-emerald-700" />
                  Trip Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Start Date</label>
                    <input 
                      required
                      type="date" 
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all disabled:opacity-50"
                      value={formData.startDate}
                      onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">End Date</label>
                    <input 
                      required
                      type="date" 
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl border ${dateError ? 'border-red-300 ring-1 ring-red-100' : 'border-stone-200'} focus:ring-2 focus:ring-emerald-500 outline-none transition-all disabled:opacity-50`}
                      value={formData.endDate}
                      onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                    />
                    {dateError && <p className="text-red-500 text-xs mt-2 font-medium">{dateError}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Number of Llamas (Min 2)</label>
                  <div className="flex items-center gap-4">
                    <input 
                      required
                      type="number" 
                      min="2"
                      max="12"
                      disabled={isSubmitting}
                      className="w-48 px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all disabled:opacity-50"
                      value={formData.numLlamas}
                      onChange={(e) => setFormData({...formData, numLlamas: parseInt(e.target.value) || 2})}
                    />
                    <span className="text-stone-500 text-sm">Our herd can support groups up to 12 animals.</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className={`flex items-center gap-4 p-6 bg-white rounded-2xl border border-stone-200 transition-all group ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-emerald-200'}`}>
                  <div className={`p-2 rounded-lg transition-colors ${formData.trailerNeeded ? 'bg-emerald-100 text-emerald-700' : 'bg-stone-100 text-stone-400 group-hover:bg-stone-200'}`}>
                    <Truck className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-stone-800">Llama Trailer Rental</span>
                      <span className="text-emerald-700 font-bold">${PRICING.TRAILER_DAILY_RATE}/day</span>
                    </div>
                    <p className="text-sm text-stone-500">I need a specialized trailer to transport my team.</p>
                  </div>
                  <input 
                    type="checkbox" 
                    disabled={isSubmitting}
                    className="w-6 h-6 rounded text-emerald-600 focus:ring-emerald-500 border-stone-300"
                    checked={formData.trailerNeeded}
                    onChange={(e) => setFormData({...formData, trailerNeeded: e.target.checked})}
                  />
                </label>

                <label className={`flex items-center gap-4 p-6 bg-white rounded-2xl border border-stone-200 transition-all group ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-emerald-200'}`}>
                  <div className={`p-2 rounded-lg transition-colors ${formData.isFirstTime ? 'bg-emerald-100 text-emerald-700' : 'bg-stone-100 text-stone-400 group-hover:bg-stone-200'}`}>
                    <div className="h-6 w-6 flex items-center justify-center">
                      <Info className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-stone-800">First-time Packer Clinic</span>
                      <span className="text-emerald-700 font-bold">${PRICING.CLINIC_FEE}</span>
                    </div>
                    <p className="text-sm text-stone-500">Mandatory 1-hour handling and trail safety session.</p>
                  </div>
                  <input 
                    type="checkbox" 
                    disabled={isSubmitting}
                    className="w-6 h-6 rounded text-emerald-600 focus:ring-emerald-500 border-stone-300"
                    checked={formData.isFirstTime}
                    onChange={(e) => setFormData({...formData, isFirstTime: e.target.checked})}
                  />
                </label>
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Trip Notes & Goals</label>
                <textarea 
                  disabled={isSubmitting}
                  className="w-full px-4 py-4 rounded-2xl border border-stone-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all h-32 disabled:opacity-50"
                  placeholder="Tell us about your route, target game, or any specific needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={!!dateError || isSubmitting}
                className={`w-full py-5 rounded-2xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all ${
                  dateError || isSubmitting
                  ? 'bg-stone-300 cursor-not-allowed text-stone-500' 
                  : 'bg-emerald-800 text-white hover:bg-emerald-900 hover:scale-[1.02] active:scale-95'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing Request...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Submit Request for Review
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Estimate Side */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="bg-stone-900 text-white rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden border border-stone-800">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
                <Calculator className="w-48 h-48" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Sparkles className="text-emerald-400 h-6 w-6" />
                    Trip Estimate
                  </h2>
                  {pricing && (
                    <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">
                      <Clock className="h-3 w-3" />
                      {pricing.days} Days
                    </div>
                  )}
                </div>

                {pricing ? (
                  <div className="space-y-6">
                    {/* Granular Breakdown */}
                    <div className="space-y-4 pb-6 border-b border-stone-800">
                      <div className="flex justify-between items-start">
                        <div className="text-stone-400 text-sm">
                          <p className="text-white font-medium mb-0.5">Llama Rental</p>
                          <p>{formData.numLlamas} animals × {pricing.days} days</p>
                        </div>
                        <span className="text-white font-bold">${pricing.llamaCost.toFixed(2)}</span>
                      </div>

                      {pricing.trailerCost > 0 && (
                        <div className="flex justify-between items-start">
                          <div className="text-stone-400 text-sm">
                            <p className="text-white font-medium mb-0.5">Trailer Rental</p>
                            <p>${PRICING.TRAILER_DAILY_RATE}/day × {pricing.days} days</p>
                          </div>
                          <span className="text-white font-bold">${pricing.trailerCost.toFixed(2)}</span>
                        </div>
                      )}

                      {pricing.clinicFee > 0 && (
                        <div className="flex justify-between items-start">
                          <div className="text-stone-400 text-sm">
                            <p className="text-white font-medium mb-0.5">Llama Handling Clinic</p>
                            <p>Mandatory one-time fee</p>
                          </div>
                          <span className="text-white font-bold">${pricing.clinicFee.toFixed(2)}</span>
                        </div>
                      )}

                      {pricing.discountAmount > 0 && (
                        <div className="flex justify-between items-start bg-emerald-950/40 p-3 rounded-xl border border-emerald-900/50">
                          <div className="text-emerald-400 text-sm">
                            <p className="font-bold flex items-center gap-1.5 mb-0.5">
                              <Tag className="h-3.5 w-3.5" />
                              Long-Trip Reward
                            </p>
                            <p>10% discount for {pricing.days} day trek</p>
                          </div>
                          <span className="text-emerald-400 font-bold">-${pricing.discountAmount.toFixed(2)}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Final Totals */}
                    <div className="pt-2">
                      <div className="flex justify-between items-end mb-6">
                        <div>
                          <span className="text-stone-500 block text-xs mb-1 uppercase tracking-widest font-bold">Total Quote</span>
                          <span className="text-5xl font-bold text-white tracking-tighter">${pricing.total.toFixed(2)}</span>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1.5 text-stone-400 text-sm mb-1">
                            <Info className="h-4 w-4" />
                            Security Deposit
                          </div>
                          <span className="text-white font-bold">$250.00</span>
                        </div>
                      </div>
                      <p className="text-stone-500 text-xs italic leading-relaxed">
                        * Quote is an estimate. Final pricing may vary based on specific gear requests or transport needs. Security deposit is fully refundable upon safe return of animals and equipment.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="bg-white/5 p-4 rounded-full mb-4">
                      <Calendar className="h-8 w-8 text-stone-700" />
                    </div>
                    <p className="text-stone-500 font-medium max-w-[200px]">
                      Select your dates to generate a real-time quote.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
                <h4 className="font-bold text-emerald-900 text-sm mb-1 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  No Deposit
                </h4>
                <p className="text-emerald-700 text-xs">No payment required to submit a request.</p>
              </div>
              <div className="bg-stone-100 rounded-2xl p-5 border border-stone-200">
                <h4 className="font-bold text-stone-900 text-sm mb-1 flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Quick Reply
                </h4>
                <p className="text-stone-600 text-xs">We typically respond within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

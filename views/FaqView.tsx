
import React, { useState } from 'react';
// Import Link component for internal navigation
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare, Info } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-emerald-800 transition-colors group"
      >
        <span className="text-xl font-bold pr-8">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-emerald-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-6 w-6 text-stone-400 group-hover:text-emerald-600 flex-shrink-0" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-8' : 'max-h-0'}`}>
        <p className="text-stone-600 leading-relaxed text-lg">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FaqView() {
  const categories = [
    {
      title: "Llama Basics",
      items: [
        {
          question: "Do llamas spit at people?",
          answer: "In short, almost never. Well-handled pack llamas like ours rarely spit at humans. Spitting is a social behavior llamas use to establish dominance within their own herd. During our mandatory clinic, we'll teach you how to handle them so you stay outside of their 'llama drama'."
        },
        {
          question: "How much weight can a llama carry?",
          answer: "Our llamas are trained to carry up to 80 lbs total—which translates to 40 lbs per side. This is plenty for most high-end backpacking gear, including chairs, coolers, and fresh food. Exceeding this weight can cause long-term injury to the animal and is strictly prohibited."
        },
        {
          question: "Are llamas difficult to handle on the trail?",
          answer: "Llamas are actually much easier to handle than horses or mules. They have a natural 'follow' instinct and soft-padded feet that make them very sure-footed. They won't spook at a piece of trash on the trail like some horses might. They are smart, quiet, and generally very cooperative trail partners."
        }
      ]
    },
    {
      title: "Rental Logistics",
      items: [
        {
          question: "Is there a minimum number of llamas for a rental?",
          answer: "Yes, we require a minimum of 2 llamas per trip. Llamas are highly social herd animals and will become extremely stressed (and potentially uncooperative) if taken out alone. We find that a 2-llama team is the perfect starting point for most pairs of hikers."
        },
        {
          question: "What kind of vehicle do I need to rent a trailer?",
          answer: "You will need a vehicle with at least a Class II hitch and a 2-inch ball. Our trailers are lightweight but require a standard 4-way or 7-way electrical connection for the lights. If you don't have a towing setup, contact us about delivery options (subject to availability and fee)."
        },
        {
          question: "What happens if a llama gets injured or sick during my trip?",
          answer: "We provide an emergency contact card and a basic llama first-aid kit with every rental. During your clinic, we cover 'Backcountry Trouble-shooting'. If an animal becomes incapacitated, your safety and the animal's welfare are the priority. We have protocols in place for retrieval depending on your location."
        }
      ]
    },
    {
      title: "Wilderness Ethics",
      items: [
        {
          question: "Are llamas allowed in Wilderness Areas?",
          answer: "Yes! Llamas are classified as 'Pack Stock' and are permitted in most National Forest and BLM Wilderness areas in Montana. Their impact is significantly lower than horses, making them favorites of Land Management agencies. We will provide specific LNT (Leave No Trace) guidelines for llama packing during your clinic."
        },
        {
          question: "How do I feed and water them in the backcountry?",
          answer: "Llamas are incredibly efficient. They are 'browse' feeders, meaning they'll eat native grasses, huckleberry leaves, and willow tips. You don't need to pack in 50 lbs of hay! We provide a small amount of supplemental grain for camp, and they typically need much less water than a horse."
        }
      ]
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-emerald-800" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-stone-600">
            Everything you need to know about embarking on a Montana llama adventure.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-emerald-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-emerald-200"></span>
                {category.title}
              </h2>
              <div className="bg-white rounded-3xl shadow-sm border border-stone-200 px-8">
                {category.items.map((item, i) => (
                  <FAQItem key={i} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-stone-900 rounded-[2.5rem] p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <MessageSquare className="w-64 h-64 -ml-20 -mt-20 absolute top-0 left-0" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
          <p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto">
            We're happy to talk llamas all day. Reach out to Kevin directly and we'll help you plan the perfect trek.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:801-372-0353" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg">
              Call 801-372-0353
            </a>
            <Link to="/booking" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all">
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

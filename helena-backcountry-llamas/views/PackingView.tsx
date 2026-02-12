
import React from 'react';
import { Package, Shield, Wind, Sparkles, CheckCircle } from 'lucide-react';

export default function PackingView() {
  const benefits = [
    {
      title: "Save Your Spine",
      desc: "Backpacking with 50+ lbs on your back is a recipe for fatigue. Let our llamas carry the heavy gear while you pack only a small daypack with essentials.",
      icon: Shield
    },
    {
      title: "Gourmet Wilderness",
      desc: "Forget dehydrated meals. With llama support, you can pack fresh steaks, a cooler of cold drinks, and a real cast-iron skillet for camp stove excellence.",
      icon: Sparkles
    },
    {
      title: "Extended Range",
      desc: "Travel further and stay longer. Because you aren't carrying the weight, you can push over that extra ridge or stay an extra 3 days in the backcountry.",
      icon: Wind
    },
    {
      title: "Stealthy Scouting",
      desc: "For hunters, llamas are a secret weapon. Their keen senses often alert you to game long before you'd otherwise notice, and they are incredibly quiet on the trail.",
      icon: Package
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Mastering the Pack</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Llama packing is an art that blends traditional mountaineering with animal husbandry. It’s about efficiency, respect for the animal, and the freedom to explore deeper.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white border border-stone-200 p-10 rounded-3xl hover:border-emerald-200 transition-colors shadow-sm">
              <benefit.icon className="h-10 w-10 text-emerald-800 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-stone-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-emerald-900 rounded-[3rem] text-white p-12 md:p-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Golden Rules of Llama Packing</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-4">01</div>
              <h4 className="text-xl font-bold mb-4 text-white">Balance is King</h4>
              <p className="text-emerald-100/70">
                Panniers must be weighed to within 1-2 lbs of each other. An unbalanced load causes the saddle to shift and creates discomfort for the llama.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-4">02</div>
              <h4 className="text-xl font-bold mb-4 text-white">Steady Pace</h4>
              <p className="text-emerald-100/70">
                Llamas are consistent walkers. They prefer a steady, moderate pace over bursts of speed. Follow their lead and you'll arrive less tired than ever.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-4">03</div>
              <h4 className="text-xl font-bold mb-4 text-white">Trust Their Senses</h4>
              <p className="text-emerald-100/70">
                If your llama stops and stares intently at a ridge, pay attention. Their eyesight is superior to ours, especially in low light.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="md:w-1/2">
                <h3 className="text-3xl font-bold mb-6">Llama Packing vs. Horses</h3>
                <div className="space-y-4">
                  {[
                    "Llamas fit in a standard 2-horse trailer (horses need more room)",
                    "Minimal water requirements (horses need gallons/day)",
                    "Gentle on trails (no heavy hooves creating ruts)",
                    "Quiet handling (no high-pitched neighing near game)",
                    "Lower profile (easier to navigate tight timber)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-emerald-600 h-5 w-5 flex-shrink-0" />
                      <span className="text-stone-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1544991180-2a818c641113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Llama packing gear" 
                  className="rounded-3xl shadow-xl border-8 border-white"
                />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

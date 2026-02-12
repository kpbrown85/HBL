
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mountain, Heart, ArrowRight, CheckCircle2, Star, Quote, Instagram, Facebook } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
    <div className="bg-emerald-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
      <Icon className="text-emerald-700 h-7 w-7" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-stone-900">{title}</h3>
    <p className="text-stone-600 leading-relaxed">{description}</p>
  </div>
);

const TestimonialCard = ({ name, trip, content, initial }: { name: string, trip: string, content: string, initial: string }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-emerald-500 text-emerald-500" />
      ))}
    </div>
    <div className="relative mb-6 flex-grow">
      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-emerald-50/50 -z-0" />
      <p className="text-stone-700 italic leading-relaxed relative z-10">"{content}"</p>
    </div>
    <div className="flex items-center gap-4 pt-6 border-t border-stone-50">
      <div className="bg-emerald-800 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner">
        {initial}
      </div>
      <div>
        <h4 className="font-bold text-stone-900">{name}</h4>
        <span className="text-sm font-medium text-emerald-700 uppercase tracking-wider">{trip}</span>
      </div>
    </div>
  </div>
);

export default function HomeView() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Pristine alpine lake in the Montana mountains" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Adventure Further, Carry <span className="text-emerald-600">Less.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-stone-100 font-light leading-relaxed">
              Experience the Montana backcountry like never before. Our rugged, well-trained llamas handle the heavy lifting while you soak in the scenery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-all shadow-lg hover:scale-105">
                Reserve Your Pack
              </Link>
              <Link to="/rentals" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-all">
                View Rental Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Quick Info */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={Mountain} 
              title="Built for the Wild" 
              description="Llamas are native to high altitudes and rocky terrain. They navigate trails where horses can't follow and leave a smaller environmental footprint."
            />
            <FeatureCard 
              icon={Shield} 
              title="Hunter Friendly" 
              description="Our llamas are accustomed to heavy loads and the unique sounds of hunting season. They make packing out an elk a breeze instead of a burden."
            />
            <FeatureCard 
              icon={Heart} 
              title="The Perfect Companion" 
              description="Intelligent, gentle, and quiet. Our llamas are picked for their temperament and trail manners, making them ideal for families and first-timers."
            />
          </div>
        </div>
      </section>

      {/* Benefits CTA */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-stone-900">Why Use a Pack Llama?</h2>
              <ul className="space-y-6">
                {[
                  "No sore shoulders or bad backs - llamas carry up to 80 lbs each",
                  "Low maintenance: Llamas are browse-feeders and need minimal supplement",
                  "Safe for the trails: Smaller paws mean less erosion and trail damage",
                  "Gentle temperament: Quiet and intelligent trail partners",
                  "Superior eyes and ears: They'll spot that elk or bear long before you do"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="text-emerald-600 h-6 w-6 flex-shrink-0 mt-1" />
                    <span className="text-lg text-stone-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/packing" className="inline-flex items-center mt-10 text-emerald-700 font-bold text-lg hover:text-emerald-800 transition-colors group">
                Learn more about llama packing <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1544991180-2a818c641113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Pack Llama on trail" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-emerald-800 text-white p-8 rounded-2xl shadow-xl hidden sm:block">
                <p className="text-4xl font-bold mb-1">80 lbs</p>
                <p className="text-emerald-200">Max carry weight per llama</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Voices from the Trail</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our fellow adventurers have to say about their Helena Backcountry experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sarah Jenkins"
              trip="Family Backpacking"
              initial="S"
              content="The llamas were the absolute stars of the show! My kids loved leading them, and my back loved not carrying 50lbs up the mountain. We're never going back to traditional backpacking."
            />
            <TestimonialCard 
              name="Marcus Thorne"
              trip="Elk Hunting"
              initial="M"
              content="Packed out a bull elk with ease. These llamas are tough and handled the steep timber without a flinch. Kevin's clinic was essential for understanding how to lead them in tight spots."
            />
            <TestimonialCard 
              name="David L."
              trip="Photography Trek"
              initial="D"
              content="Gave me the freedom to bring all my heavy glass and my big tripod deep into the wilderness. Spotted more wildlife thanks to the llamas' keen eyes alerting us early."
            />
          </div>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Join the Adventure</h2>
              <p className="text-emerald-100/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                Get a front-row seat to our trail life. We post regular updates from the high country, scouting reports, and stories from our guests.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white text-stone-900 px-10 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-all transform hover:scale-105 active:scale-95 shadow-xl"
                >
                  <Instagram className="h-6 w-6 text-emerald-700" />
                  Instagram
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white text-stone-900 px-10 py-4 rounded-2xl font-bold hover:bg-emerald-50 transition-all transform hover:scale-105 active:scale-95 shadow-xl"
                >
                  <Facebook className="h-6 w-6 text-emerald-700" />
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

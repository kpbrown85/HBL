
import React from 'react';
import { BookOpen, Activity, CloudSun, Leaf } from 'lucide-react';

export default function LlamaInfoView() {
  const infoSections = [
    {
      icon: Activity,
      title: "Endurance & Agility",
      content: "Llamas possess specialized soft-padded feet that grip rocky terrain without damaging the ecosystem. Their unique blood chemistry allows them to thrive at high altitudes where oxygen is sparse, making them perfect for Montana's mountain passes."
    },
    {
      icon: CloudSun,
      title: "Hardiness",
      content: "Unlike horses that require significant amounts of grain and water, llamas are browse feeders. They efficiently digest a wide variety of native plants and require far less water, reducing the logistical burden on long backcountry trips."
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      content: "Llamas are 'leave no trace' masters. Their communal dung piles and efficient grazing habits mean they don't tear up meadows or pollute water sources like larger pack animals can."
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Your Backcountry Partners</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            The llama is South America's greatest gift to the wilderness explorer. Intelligent, observant, and incredibly strong for their size, they have been the backbone of mountain transport for centuries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1532509170117-1f48039c4355?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Llama portrait" 
              className="rounded-3xl shadow-xl object-cover h-full min-h-[400px]"
            />
          </div>
          <div className="flex flex-col justify-center space-y-8">
            {infoSections.map((section, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="bg-emerald-100 p-4 rounded-2xl flex-shrink-0 h-fit">
                  <section.icon className="h-6 w-6 text-emerald-800" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-stone-900 rounded-[2.5rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
             <BookOpen className="w-96 h-96 -mr-20 -mt-20" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Understanding Llama Behavior</h2>
            <div className="space-y-6 text-stone-300">
              <p>
                Contrary to popular belief, well-trained pack llamas rarely spit at humans. This behavior is typically reserved for establishing social dominance within the herd. On the trail, you'll find them to be quiet, curious observers.
              </p>
              <p>
                They communicate through a variety of soft humming sounds and distinct ear positions. Part of our mandatory rental clinic includes learning to read these signals so you can bond with your pack team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

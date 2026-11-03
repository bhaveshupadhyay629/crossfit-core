import { Award, CheckCircle2 } from 'lucide-react';
import { trainers } from '../data';

export function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-(--bg) relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--card-bg) border border-(--card-border) text-(--accent) text-xs font-bold uppercase tracking-wider mb-4">
            Expert Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tight">
            Meet Your <span className="text-(--accent)">Coaches</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-(--muted)">
            Our coaches combine years of competitive experience with a passion for teaching beginners. They prioritize flawless mechanics and positive reinforcement above all else.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-(--card-bg) border border-(--card-border) rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:border-(--accent)/50 hover:shadow-xl hover:shadow-red-950/20"
            >
              {/* Photo Banner */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-(--card-bg) via-transparent to-transparent opacity-90" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-neutral-700 text-xs font-bold text-white flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-(--accent)" />
                  <span>{trainer.role}</span>
                </div>
                {/* Fallback graphical avatar representation */}
                <div className="w-24 h-24 rounded-full bg-neutral-800 border-2 border-(--accent) flex items-center justify-center text-3xl font-black text-white shadow-2xl group-hover:scale-105 transition-transform">
                  {trainer.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-(--accent) transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-xs font-semibold text-(--accent) uppercase tracking-wide mt-1">
                    {trainer.specialty}
                  </p>
                  
                  <p className="mt-3 text-sm text-(--muted) leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800">
                  <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                    Certifications
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-md text-[11px] text-neutral-300 font-medium"
                      >
                        <CheckCircle2 className="w-3 h-3 text-(--accent)" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

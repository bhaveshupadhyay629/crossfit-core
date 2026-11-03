import { ArrowRight, Flame, Zap, HeartPulse, Trophy } from 'lucide-react';

interface ClassesProps {
  onOpenBooking: () => void;
}

export function Classes({ onOpenBooking }: ClassesProps) {
  const programs = [
    {
      icon: Flame,
      title: 'CrossFit WOD (Workout of the Day)',
      level: 'All Levels',
      duration: '60 mins',
      description: 'Our flagship high-intensity class combining weightlifting, gymnastics, and cardio. Every workout is fully scalable for beginners and challenging for veterans.',
      highlights: ['Constantly varied functional movements', 'Scalable weights and reps', 'Led by expert coaches'],
      tag: 'Most Popular',
    },
    {
      icon: Zap,
      title: 'Core Fundamentals (On-Ramp)',
      level: 'Absolute Beginners',
      duration: '45 mins',
      description: 'The essential starting point for new members. Learn proper mechanics for squats, presses, and Olympic lifts in a safe, small-group setting.',
      highlights: ['Step-by-step movement breakdown', 'No prior experience needed', 'Focus on safety and confidence'],
      tag: 'Best for Starters',
    },
    {
      icon: HeartPulse,
      title: 'Engine & Conditioning',
      level: 'All Levels',
      duration: '50 mins',
      description: 'A non-barbell cardio powerhouse session focusing on rowing, biking, running, and bodyweight intervals to torch fat and boost stamina.',
      highlights: ['Low technical barrier', 'High aerobic burn', 'Great active recovery'],
      tag: 'Cardio Focus',
    },
    {
      icon: Trophy,
      title: 'Barbell Club',
      level: 'Intermediate+',
      duration: '75 mins',
      description: 'Deep dive into Olympic weightlifting technique. Master the Snatch and Clean & Jerk with dedicated accessory work and mobility drills.',
      highlights: ['Snatch & Clean & Jerk mastery', 'Personalized technique cues', 'Build raw explosive power'],
      tag: 'Strength Focus',
    },
  ];

  return (
    <section id="classes" className="py-24 bg-(--card-bg)/40 border-y border-(--card-border)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--card-bg) border border-(--card-border) text-(--accent) text-xs font-bold uppercase tracking-wider mb-4">
            Training Programs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tight">
            Designed To Challenge. <span className="text-(--accent)">Built To Transform.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-(--muted)">
            Whether your goal is to lose fat, build muscle, or simply move without pain, we have a specialized class tailored for your journey.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((prog, index) => {
            const Icon = prog.icon;
            return (
              <div 
                key={index}
                className="bg-(--card-bg) border border-(--card-border) rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-(--accent)/50 hover:shadow-2xl hover:shadow-red-950/20 group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-(--accent) transition-transform group-hover:scale-110">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-(--accent)/10 border border-(--accent)/30 text-(--accent) text-xs font-bold uppercase tracking-wider">
                      {prog.tag}
                    </span>
                  </div>

                  {/* Title & Level */}
                  <h3 className="text-2xl font-black text-white uppercase italic mb-2">
                    {prog.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-semibold text-(--muted) uppercase tracking-wider mb-4">
                    <span className="text-(--fg)">Level: {prog.level}</span>
                    <span>•</span>
                    <span className="text-(--fg)">Duration: {prog.duration}</span>
                  </div>

                  <p className="text-sm text-(--muted) leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-8 border-t border-neutral-800/80 pt-6">
                    {prog.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-(--accent)" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action */}
                <button
                  onClick={onOpenBooking}
                  className="w-full flex items-center justify-center gap-2 bg-neutral-900 hover:bg-(--accent) text-white font-bold py-3 rounded-xl text-sm transition-all border border-neutral-800 hover:border-(--accent) group-hover:shadow-lg"
                >
                  <span>Book This Class</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import { ShieldCheck, Heart, Award, Zap } from 'lucide-react';

export function About() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Scalable for Everyone',
      description: 'Every workout is 100% scalable. Whether you are picking up a barbell for the first time or training for competition, our coaches tailor movements to your exact fitness level.',
    },
    {
      icon: Heart,
      title: 'Supportive Community',
      description: 'No egos, no intimidation. You will sweat alongside everyday professionals, parents, and students who encourage you to hit your personal best every single day.',
    },
    {
      icon: Award,
      title: 'Expert Coaching',
      description: 'Our certified coaches watch every rep, ensuring proper form, injury prevention, and continuous progression so you feel confident under the bar.',
    },
    {
      icon: Zap,
      title: 'Functional Fitness',
      description: 'Build strength that translates to real life. Lift groceries with ease, run faster, stay agile, and gain unstoppable energy for your daily routine.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-(--bg) relative overflow-hidden">
      {/* Background accent glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-(--accent)/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--card-bg) border border-(--card-border) text-(--accent) text-xs font-bold uppercase tracking-wider mb-4">
            Our Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tight">
            Built For Real Life. <span className="text-(--accent)">Made For Everyone.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-(--muted)">
            At CrossFit Core, we believe high-intensity fitness shouldn't be intimidating. We stripped away the pretension to create a welcoming, high-energy environment where beginners thrive and experienced athletes get unbreakable.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index}
                className="bg-(--card-bg) border border-(--card-border) rounded-2xl p-6 transition-all duration-300 hover:border-(--accent)/50 hover:shadow-xl hover:shadow-red-950/20 group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-(--accent) mb-5 transition-transform group-hover:scale-110">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-(--muted) leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-neutral-900 via-(--card-bg) to-neutral-900 border border-(--card-border) rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-black text-white uppercase italic">
              Never done CrossFit before? <span className="text-(--accent)">You belong here.</span>
            </h4>
            <p className="text-sm text-(--muted) max-w-xl">
              Our On-Ramp beginner program teaches you fundamental movements at a safe, comfortable pace before you join regular classes.
            </p>
          </div>
          <a
            href="#schedule"
            className="whitespace-nowrap bg-white hover:bg-neutral-200 text-black font-bold px-6 py-3 rounded-lg text-sm transition-all shadow-lg"
          >
            Explore Beginners Classes
          </a>
        </div>

      </div>
    </section>
  );
}

import { Flame, ArrowRight, ShieldCheck, Trophy, Users } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-(--bg) to-neutral-950 pt-16 pb-24 md:pt-24 md:pb-32 border-b border-(--card-border)">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-(--accent)/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-(--card-bg) border border-(--card-border) px-4 py-2 rounded-full">
              <Flame className="w-4 h-4 text-(--accent)" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-(--muted)">
                Beginner Friendly & Scalable Workouts
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none italic">
              Unleash Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-(--accent) to-red-500">
                Inner Athlete
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-(--muted) max-w-2xl mx-auto lg:mx-0 font-normal">
              High-intensity functional fitness built for every fitness level. Whether you are stepping into a gym for the first time or chasing a new personal record, CrossFit Core is your home for real results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                href="#schedule"
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-(--accent) hover:bg-(--accent-hover) text-white font-black px-8 py-4 rounded-xl text-lg transition-all shadow-xl shadow-red-950/50 hover:scale-105"
              >
                <span>Book Free Trial Class</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a
                href="#classes"
                className="w-full sm:w-auto flex items-center justify-center bg-(--card-bg) hover:bg-neutral-800 text-white font-bold px-8 py-4 rounded-xl text-lg border border-(--card-border) transition-all"
              >
                Explore Programs
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-(--card-border)/60">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-white font-black text-xl sm:text-2xl">
                  <Users className="w-5 h-5 text-(--accent)" />
                  <span>500+</span>
                </div>
                <span className="text-xs text-(--muted) uppercase tracking-wider font-semibold">Active Members</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-white font-black text-xl sm:text-2xl">
                  <Trophy className="w-5 h-5 text-(--accent)" />
                  <span>100%</span>
                </div>
                <span className="text-xs text-(--muted) uppercase tracking-wider font-semibold">Certified Coaches</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-white font-black text-xl sm:text-2xl">
                  <ShieldCheck className="w-5 h-5 text-(--accent)" />
                  <span>Beginner</span>
                </div>
                <span className="text-xs text-(--muted) uppercase tracking-wider font-semibold">Safe Scaling</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Card / Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-(--accent) to-neutral-700 rounded-3xl blur opacity-30 animate-pulse"></div>
              
              <div className="relative bg-(--card-bg) border border-(--card-border) p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6">
                
                <div className="flex items-center justify-between border-b border-(--card-border) pb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-(--accent)">Today's Workout Preview</span>
                  <span className="text-xs bg-red-950/80 text-red-400 font-bold px-2.5 py-1 rounded border border-red-900/50">WOD of the Day</span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-black uppercase tracking-wide text-white italic">"Core Starter"</h3>
                  <p className="text-sm text-(--muted)">Every 3 mins for 15 mins:</p>
                  
                  <div className="space-y-2.5">
                    <div className="bg-neutral-900 p-3 rounded-lg border border-neutral-800 flex items-center justify-between text-sm">
                      <span className="font-semibold text-white">10 Goblet Squats</span>
                      <span className="text-(--muted) font-mono">24/16 kg</span>
                    </div>
                    <div className="bg-neutral-900 p-3 rounded-lg border border-neutral-800 flex items-center justify-between text-sm">
                      <span className="font-semibold text-white">10 Push-ups (or Knee)</span>
                      <span className="text-(--muted) font-mono">Scaled</span>
                    </div>
                    <div className="bg-neutral-900 p-3 rounded-lg border border-neutral-800 flex items-center justify-between text-sm">
                      <span className="font-semibold text-white">150m Rowing Sprint</span>
                      <span className="text-(--muted) font-mono">Max Effort</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-3 rounded-xl border border-neutral-700 text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Reserve Your Spot in Class</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

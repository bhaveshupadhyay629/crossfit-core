import { Check, Zap, Sparkles, Shield } from 'lucide-react';
import { pricingPlans } from '../data';

interface PricingProps {
  onOpenBooking: () => void;
}

export function Pricing({ onOpenBooking }: PricingProps) {
  return (
    <section id="pricing" className="py-24 bg-(--card-bg)/30 border-y border-(--card-border) relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--card-bg) border border-(--card-border) text-(--accent) text-xs font-bold uppercase tracking-wider mb-4">
            Investment In Yourself
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tight">
            Simple, Transparent <span className="text-(--accent)">Pricing</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-(--muted)">
            No hidden fees, no complicated contracts. Choose the membership that fits your goals or drop in for a single class to experience the energy yourself.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => {
            const isPopular = plan.popular;

            return (
              <div
                key={index}
                className={`relative rounded-2xl flex flex-col justify-between p-8 transition-all duration-300 ${
                  isPopular
                    ? 'bg-(--card-bg) border-2 border-(--accent) shadow-2xl shadow-red-950/40 md:-translate-y-2'
                    : 'bg-(--card-bg) border border-(--card-border) hover:border-neutral-700'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-(--accent) text-white font-bold text-xs uppercase tracking-wider py-1 px-4 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-black text-white uppercase italic">
                      {plan.name}
                    </h3>
                    <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-(--accent)">
                      {isPopular ? <Zap className="w-5 h-5" /> : <Shield className="w-5 h-5" />}
                    </div>
                  </div>

                  <p className="text-sm text-(--muted) min-h-[40px] mb-6">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-neutral-800">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-sm text-(--muted) font-medium">
                      /{plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                        <div className="w-5 h-5 rounded-full bg-red-950/60 border border-red-900/50 flex items-center justify-center text-(--accent) shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenBooking}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm tracking-wide uppercase transition-all shadow-lg ${
                    isPopular
                      ? 'bg-(--accent) hover:bg-(--accent-hover) text-white shadow-red-950/60 hover:shadow-red-900/80'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>

        {/* FAQ or Guarantee Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-(--muted)">
            Looking for corporate wellness packages, student discounts, or personal coaching?{' '}
            <a href="#contact" className="text-white font-bold underline hover:text-(--accent)">
              Contact our team
            </a>{' '}
            for custom options.
          </p>
        </div>

      </div>
    </section>
  );
}

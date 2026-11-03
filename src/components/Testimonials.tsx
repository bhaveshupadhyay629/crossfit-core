import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    memberSince: "14 months",
    rating: 5,
    quote: "I was intimidated by CrossFit for years. I thought you had to already be in great shape to start. The coaches here scaled every single movement for me on day one, and now I'm lifting weights I never imagined possible.",
    highlight: "Lost 25 lbs & Gained Strength"
  },
  {
    name: "Marcus Vance",
    memberSince: "2 years",
    rating: 5,
    quote: "The community here is unmatched. It's not just a gym; it's a supportive environment where people genuinely cheer for your personal records. The coaching staff pays incredible attention to safety and form.",
    highlight: "First Pull-Up Achieved"
  },
  {
    name: "Elena Rostova",
    memberSince: "8 months",
    rating: 5,
    quote: "As a busy working mom, the 6 AM class has been my sanctuary. I get an intense, well-structured workout done in under an hour, and I walk out energized for the rest of my day. Best decision I've made for myself.",
    highlight: "Improved Energy & Focus"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-(--accent)/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--card-bg) border border-(--card-border) text-(--accent) text-xs font-bold uppercase tracking-wider mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tight">
            Real People. <span className="text-(--accent)">Real Results.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-(--muted)">
            Most of our members had never touched a barbell before stepping through our doors. Read how everyday beginners transformed their confidence and fitness at CrossFit Core.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-(--card-bg) border border-(--card-border) rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group transition-all duration-300 hover:border-(--accent)/50 hover:shadow-xl hover:shadow-red-950/20"
            >
              {/* Quote Icon Background */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-neutral-800 pointer-events-none group-hover:text-(--accent)/20 transition-colors" />

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-800">
                <div className="w-10 h-10 rounded-full bg-neutral-800 border border-(--accent) flex items-center justify-center font-bold text-white text-sm">
                  {item.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs text-(--muted)">
                    Member for {item.memberSince} • <span className="text-(--accent) font-medium">{item.highlight}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Stat Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-neutral-900/60 border border-(--card-border) rounded-2xl p-8 backdrop-blur-sm">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white italic">4.9 / 5.0</div>
            <div className="text-xs uppercase tracking-wider text-(--muted) mt-1">Average Member Rating</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-(--accent) italic">85%+</div>
            <div className="text-xs uppercase tracking-wider text-(--muted) mt-1">Started As Complete Beginners</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white italic">120+</div>
            <div className="text-xs uppercase tracking-wider text-(--muted) mt-1">Active Community Members</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-(--accent) italic">100%</div>
            <div className="text-xs uppercase tracking-wider text-(--muted) mt-1">Scalable Workouts</div>
          </div>
        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'beginner',
    preferredTime: 'morning',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-(--bg) relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-(--accent)/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--card-bg) border border-(--card-border) text-(--accent) text-xs font-bold uppercase tracking-wider mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tight">
            Start Your <span className="text-(--accent)">Free Trial</span> Today
          </h2>
          <p className="mt-4 text-base sm:text-lg text-(--muted)">
            Ready to take the first step? Drop by our box, give us a call, or book your free introductory session using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info & Hours */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-(--card-bg) border border-(--card-border) rounded-2xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-white uppercase italic">
                Box Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-(--accent) shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Location</h4>
                    <p className="text-sm text-(--muted) mt-0.5">
                      1044 Ironclad Way, Suite B<br />
                      Fitness District, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-(--accent) shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Phone</h4>
                    <p className="text-sm text-(--muted) mt-0.5">
                      (555) 492-CORE
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-(--accent) shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Email</h4>
                    <p className="text-sm text-(--muted) mt-0.5">
                      train@crossfitcore.example
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-(--card-bg) border border-(--card-border) rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-(--accent)">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase italic">
                  Box Hours
                </h3>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="text-(--muted)">Monday – Friday</span>
                  <span className="font-bold text-white">5:30 AM – 8:30 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="text-(--muted)">Saturday</span>
                  <span className="font-bold text-white">8:00 AM – 1:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-(--muted)">Sunday</span>
                  <span className="font-bold text-(--accent)">Open Gym / Recovery</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Free Trial Form & Map Placeholder */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="bg-(--card-bg) border border-(--card-border) rounded-2xl p-8 sm:p-10 relative">
              
              <h3 className="text-2xl font-black text-white uppercase italic mb-2">
                Book Your <span className="text-(--accent)">Free Introductory Class</span>
              </h3>
              <p className="text-sm text-(--muted) mb-8">
                Fill out the quick form below and our head coach will reach out to schedule your first visit.
              </p>

              {submitted ? (
                <div className="bg-neutral-900 border border-green-600/50 rounded-xl p-8 text-center space-y-4 my-6">
                  <div className="w-16 h-16 bg-green-600/20 border border-green-500 rounded-full flex items-center justify-center mx-auto text-green-500">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">You're All Set!</h4>
                  <p className="text-sm text-(--muted) max-w-md mx-auto">
                    Thanks for reaching out, <span className="text-white font-semibold">{formData.name}</span>! We have received your request and will contact you via email or phone within 24 hours to confirm your session.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 bg-(--accent) hover:bg-(--accent-hover) text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-all"
                  >
                    Book Another Session
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-(--muted) mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-(--accent) transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-(--muted) mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-(--accent) transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-(--muted) mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-(--accent) transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-(--muted) mb-2">
                        Fitness Experience
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-(--accent) transition-colors"
                      >
                        <option value="beginner">Complete Beginner (New to CrossFit)</option>
                        <option value="some">Some Gym Experience</option>
                        <option value="experienced">Experienced CrossFitter</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-(--muted) mb-2">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-(--accent) transition-colors"
                    >
                      <option value="morning">Morning (6:00 AM – 9:00 AM)</option>
                      <option value="midday">Midday (12:00 PM – 1:30 PM)</option>
                      <option value="evening">Evening (5:00 PM – 7:30 PM)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-(--accent) hover:bg-(--accent-hover) text-white font-bold py-4 rounded-xl text-base transition-all shadow-lg shadow-red-950/40 hover:shadow-red-900/60 mt-4 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Claim Free Trial Session</span>
                  </button>

                  <p className="text-center text-xs text-(--muted) mt-3">
                    No obligations or credit card required. Come ready to sweat!
                  </p>
                </form>
              )}

            </div>

            {/* Map Placeholder */}
            <div className="bg-(--card-bg) border border-(--card-border) rounded-2xl h-64 overflow-hidden relative flex items-center justify-center group">
              {/* Grid graphic representation */}
              <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-(--card-bg) via-transparent to-transparent" />
              
              <div className="relative z-10 text-center p-6 space-y-2">
                <div className="w-12 h-12 rounded-full bg-(--accent) text-white flex items-center justify-center mx-auto shadow-xl animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white uppercase italic">
                  CrossFit Core Box Location
                </h4>
                <p className="text-xs text-(--muted)">
                  1044 Ironclad Way, Fitness District, CA • Free Parking Available On Site
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

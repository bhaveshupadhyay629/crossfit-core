import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, User, CheckCircle, X, AlertCircle } from 'lucide-react';
import { scheduleData } from '../data';

interface ScheduleProps {
  isBookingOpen: boolean;
  onCloseBooking: () => void;
}

export function Schedule({ isBookingOpen, onCloseBooking }: ScheduleProps) {
  const [selectedDay, setSelectedDay] = useState<keyof typeof scheduleData>('monday');
  const [activeClass, setActiveClass] = useState<{ title: string; time: string; trainer: string; day: string } | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [error, setError] = useState('');

  const days = [
    { key: 'monday', label: 'Mon' },
    { key: 'tuesday', label: 'Tue' },
    { key: 'wednesday', label: 'Wed' },
    { key: 'thursday', label: 'Thu' },
    { key: 'friday', label: 'Fri' },
    { key: 'saturday', label: 'Sat' },
    { key: 'sunday', label: 'Sun' },
  ] as const;

  const handleOpenBookingForClass = (item: { title: string; time: string; trainer: string }, dayLabel: string) => {
    setActiveClass({ ...item, day: dayLabel });
    setBookingSuccess(false);
    setError('');
    // If modal wasn't open via header, open it
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError('Please fill in your name and email.');
      return;
    }
    setError('');
    setBookingSuccess(true);
  };

  return (
    <section id="schedule" className="py-24 bg-neutral-950 border-t border-b border-(--card-border)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--card-bg) border border-(--card-border) text-(--accent) text-xs font-bold uppercase tracking-wider mb-4">
            Timetable & Booking
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tight">
            Class Schedule & <span className="text-(--accent)">Reserve Your Spot</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-(--muted)">
            Choose your preferred training time below. First-time visitors get their first class completely free! Click 'Book Spot' on any session to reserve.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {days.map((day) => (
            <button
              key={day.key}
              onClick={() => setSelectedDay(day.key)}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all ${
                selectedDay === day.key
                  ? 'bg-(--accent) text-white shadow-lg shadow-red-950/40 scale-105'
                  : 'bg-(--card-bg) text-(--muted) hover:text-white border border-(--card-border)'
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {scheduleData[selectedDay].map((item, index) => (
            <div
              key={index}
              className="bg-(--card-bg) border border-(--card-border) rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-(--accent)/50 hover:shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-(--accent) text-xs font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    {item.time}
                  </span>
                  <span className="text-xs text-(--muted) uppercase font-semibold">
                    {item.spotsLeft} spots left
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-(--accent) transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-(--muted) mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-xs text-(--muted)">
                  <User className="w-4 h-4 text-neutral-400" />
                  <span>Coach {item.trainer}</span>
                </div>
                <button
                  onClick={() => handleOpenBookingForClass(item, selectedDay.toUpperCase())}
                  className="bg-neutral-900 hover:bg-(--accent) text-white font-bold px-4 py-2 rounded-lg text-xs transition-colors border border-neutral-800 hover:border-(--accent)"
                >
                  Book Spot
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Booking Modal (Triggered by schedule items or header) */}
      {(isBookingOpen || activeClass) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-(--card-bg) border border-(--card-border) rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => {
                setActiveClass(null);
                onCloseBooking();
              }}
              className="absolute top-5 right-5 text-(--muted) hover:text-white p-1 rounded-lg bg-neutral-900 border border-neutral-800"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSuccess ? (
              <div>
                <div className="flex items-center gap-2 text-(--accent) text-xs font-bold uppercase tracking-wider mb-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{activeClass ? `Booking: ${activeClass.title}` : 'Reserve Your Free Trial Class'}</span>
                </div>
                
                <h3 className="text-2xl font-black text-white uppercase italic mb-2">
                  {activeClass ? `${activeClass.title} (${activeClass.time})` : 'Join CrossFit Core'}
                </h3>
                <p className="text-sm text-(--muted) mb-6">
                  {activeClass 
                    ? `Coach: ${activeClass.trainer} • Day: ${activeClass.day}`
                    : 'Fill out your details below and our team will get you locked into your first beginner-friendly session.'}
                </p>

                {error && (
                  <div className="mb-4 p-3 bg-red-950/50 border border-red-800 rounded-lg flex items-center gap-2 text-red-200 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-(--muted) mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-(--accent)"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-(--muted) mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-(--accent)"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-(--muted) mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-(--accent)"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-(--accent) hover:bg-(--accent-hover) text-white font-bold py-3.5 rounded-lg text-sm transition-all shadow-lg shadow-red-950/40 mt-2"
                  >
                    Confirm & Reserve Spot
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-red-950/60 border border-red-800 text-(--accent) rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic">
                  You're Booked In!
                </h3>
                <p className="text-sm text-(--muted) max-w-sm mx-auto">
                  Awesome! We've sent a confirmation email to <span className="text-white font-semibold">{formData.email}</span> with details on what to bring to class.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setActiveClass(null);
                      onCloseBooking();
                      setBookingSuccess(false);
                      setFormData({ name: '', email: '', phone: '' });
                    }}
                    className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold px-6 py-2.5 rounded-lg text-sm border border-neutral-800"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}

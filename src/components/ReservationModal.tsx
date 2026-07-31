import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DINING_ROOMS } from '../data/restaurantData';
import { X, Calendar as CalendarIcon, Users, Clock, Sparkles, CheckCircle2, ChevronRight, ChevronLeft, CreditCard, ShieldCheck } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [selectedRoom, setSelectedRoom] = useState<string>('main-room');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [selectedDate, setSelectedDate] = useState<string>('2026-08-15');
  const [selectedTime, setSelectedTime] = useState<string>('8:30 PM');
  const [dietaryTags, setDietaryTags] = useState<string[]>([]);
  const [winePairing, setWinePairing] = useState<boolean>(true);
  const [guestInfo, setGuestInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequest: ''
  });
  const [bookingCode, setBookingCode] = useState<string>('');

  if (!isOpen) return null;

  const currentRoomObj = DINING_ROOMS.find(r => r.id === selectedRoom) || DINING_ROOMS[0];

  const handleDietaryToggle = (tag: string) => {
    if (dietaryTags.includes(tag)) {
      setDietaryTags(dietaryTags.filter(t => t !== tag));
    } else {
      setDietaryTags([...dietaryTags, tag]);
    }
  };

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'EO-' + Math.floor(100000 + Math.random() * 900000);
    setBookingCode(randomCode);
    setStep(4);
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0E0F0F]/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Container Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative max-w-4xl w-full glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-2xl my-8"
      >
        {/* Top Header Bar */}
        <div className="p-6 sm:p-8 bg-[#161819] border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#7C8A58]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RESERVATION EXPERIENCE</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F2EA] font-light">
              Table Reservation · <span className="italic text-[#7C8A58]">Ember &amp; Oak</span>
            </h3>
          </div>

          <button
            onClick={resetAndClose}
            className="p-2.5 text-[#B9B6AF] hover:text-white rounded-full bg-[#202224] hover:bg-[#7C8A58] hover:text-[#0E0F0F] transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        {step < 4 && (
          <div className="bg-[#0E0F0F] px-8 py-3 border-b border-white/5 flex items-center justify-between text-xs font-mono text-[#B9B6AF]">
            <div className="flex space-x-6">
              <span className={step >= 1 ? 'text-[#7C8A58] font-bold' : ''}>01. Sanctum &amp; Guests</span>
              <span className={step >= 2 ? 'text-[#7C8A58] font-bold' : ''}>02. Date &amp; Time</span>
              <span className={step >= 3 ? 'text-[#7C8A58] font-bold' : ''}>03. Guest Details</span>
            </div>
            <span className="text-[#A7B08A]">Step {step} of 3</span>
          </div>
        )}

        {/* Body Content */}
        <div className="p-6 sm:p-10 space-y-8 bg-[#161819]">
          {/* STEP 1: DINING ROOM & GUESTS */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              <div>
                <label className="text-xs uppercase tracking-widest text-[#7C8A58] block mb-4">
                  Select Dining Sanctum:
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {DINING_ROOMS.map((room) => (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoom(room.id)}
                      className={`glass-panel p-5 rounded-2xl border cursor-pointer transition-all ${
                        selectedRoom === room.id
                          ? 'border-[#7C8A58] bg-[#202224]'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="h-32 rounded-xl overflow-hidden mb-4">
                        <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                      </div>
                      <h4 className="font-serif text-lg text-[#F6F2EA]">{room.name}</h4>
                      <p className="text-xs text-[#B9B6AF] mt-1 line-clamp-2">{room.description}</p>
                      <div className="mt-3 pt-3 border-t border-white/10 flex justify-between text-[11px] text-[#A7B08A]">
                        <span>{room.capacity}</span>
                        <span className="font-mono">{room.deposit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guest Selector */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-serif text-lg text-[#F6F2EA]">Number of Guests</div>
                  <div className="text-xs text-[#B9B6AF]">For parties larger than 6, contact private events.</div>
                </div>
                <div className="flex items-center space-x-4">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <button
                      key={num}
                      onClick={() => setGuestCount(num)}
                      className={`w-10 h-10 rounded-full text-xs font-mono font-medium transition-all ${
                        guestCount === num
                          ? 'bg-[#7C8A58] text-[#0E0F0F]'
                          : 'bg-[#202224] text-[#B9B6AF] hover:text-white'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-8 py-3.5 bg-[#7C8A58] text-[#0E0F0F] rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#F6F2EA] transition-all flex items-center space-x-2"
                >
                  <span>Select Date &amp; Time</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: DATE & TIME */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Date Input */}
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#7C8A58] block mb-3">
                    Choose Dining Date:
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-4 bg-[#202224] border border-white/10 rounded-xl text-[#F6F2EA] font-mono focus:border-[#7C8A58] focus:outline-none"
                  />
                  <span className="text-[11px] text-[#B9B6AF] mt-2 block">
                    Reservations open 60 days in advance.
                  </span>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#7C8A58] block mb-3">
                    Available Seating Times:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['6:30 PM', '7:00 PM', '7:45 PM', '8:30 PM', '9:15 PM'].map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-xl border text-xs font-mono transition-all ${
                          selectedTime === time
                            ? 'bg-[#7C8A58] text-[#0E0F0F] border-[#7C8A58] font-bold'
                            : 'bg-[#202224] text-[#F6F2EA] border-white/10 hover:border-white/30'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Summary Card */}
              <div className="p-4 bg-[#202224]/80 rounded-xl border border-white/10 flex items-center justify-between text-xs text-[#F6F2EA]">
                <div>
                  <span className="text-[#7C8A58] font-medium block">Selected Summary:</span>
                  <span>{currentRoomObj.name} · {guestCount} Guests · {selectedDate} at {selectedTime}</span>
                </div>
                <span className="font-mono text-[#A7B08A]">{currentRoomObj.deposit}</span>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-white/10 text-xs uppercase tracking-widest text-[#B9B6AF] hover:text-white rounded-full flex items-center space-x-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-8 py-3.5 bg-[#7C8A58] text-[#0E0F0F] rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#F6F2EA] transition-all flex items-center space-x-2"
                >
                  <span>Guest Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: GUEST DETAILS & DIETARY */}
          {step === 3 && (
            <form onSubmit={handleCompleteBooking} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#7C8A58] block mb-2">First Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Astrid"
                    value={guestInfo.firstName}
                    onChange={e => setGuestInfo({ ...guestInfo, firstName: e.target.value })}
                    className="w-full p-3.5 bg-[#202224] border border-white/10 rounded-xl text-[#F6F2EA] focus:border-[#7C8A58] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#7C8A58] block mb-2">Last Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Lindholm"
                    value={guestInfo.lastName}
                    onChange={e => setGuestInfo({ ...guestInfo, lastName: e.target.value })}
                    className="w-full p-3.5 bg-[#202224] border border-white/10 rounded-xl text-[#F6F2EA] focus:border-[#7C8A58] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#7C8A58] block mb-2">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="astrid@domain.com"
                    value={guestInfo.email}
                    onChange={e => setGuestInfo({ ...guestInfo, email: e.target.value })}
                    className="w-full p-3.5 bg-[#202224] border border-white/10 rounded-xl text-[#F6F2EA] focus:border-[#7C8A58] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#7C8A58] block mb-2">Phone Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="+45 30 12 34 56"
                    value={guestInfo.phone}
                    onChange={e => setGuestInfo({ ...guestInfo, phone: e.target.value })}
                    className="w-full p-3.5 bg-[#202224] border border-white/10 rounded-xl text-[#F6F2EA] focus:border-[#7C8A58] focus:outline-none"
                  />
                </div>
              </div>

              {/* Dietary Tags */}
              <div>
                <label className="text-xs uppercase tracking-widest text-[#7C8A58] block mb-3">
                  Dietary Requirements &amp; Allergies:
                </label>
                <div className="flex flex-wrap gap-3">
                  {['Pescatarian', 'Vegetarian', 'Gluten-Free', 'Nut Allergy', 'Shellfish Allergy', 'Halal Prepared'].map((tag) => (
                    <button
                      type="button"
                      key={tag}
                      onClick={() => handleDietaryToggle(tag)}
                      className={`px-4 py-2 rounded-full text-xs transition-all ${
                        dietaryTags.includes(tag)
                          ? 'bg-[#7C8A58] text-[#0E0F0F] font-medium'
                          : 'bg-[#202224] text-[#B9B6AF] border border-white/10 hover:text-white'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-[#7C8A58] block mb-2">
                  Special Occasion or Notes:
                </label>
                <textarea
                  rows={3}
                  placeholder="Anniversary, birthday, or preferred seating notes..."
                  value={guestInfo.specialRequest}
                  onChange={e => setGuestInfo({ ...guestInfo, specialRequest: e.target.value })}
                  className="w-full p-3.5 bg-[#202224] border border-white/10 rounded-xl text-[#F6F2EA] focus:border-[#7C8A58] focus:outline-none"
                />
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 border border-white/10 text-xs uppercase tracking-widest text-[#B9B6AF] hover:text-white rounded-full flex items-center space-x-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#7C8A58] text-[#0E0F0F] rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#F6F2EA] transition-all flex items-center space-x-2 shadow-xl"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confirm Reservation</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: DIGITAL CONFIRMATION TICKET */}
          {step === 4 && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6 text-center">
              <div className="w-16 h-16 bg-[#7C8A58]/20 text-[#7C8A58] rounded-full flex items-center justify-center mx-auto border border-[#7C8A58]/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <div className="text-xs uppercase tracking-[0.3em] text-[#7C8A58]">CONFIRMATION CODE</div>
                <div className="font-mono text-3xl text-[#F6F2EA] tracking-widest">{bookingCode}</div>
                <h4 className="font-serif text-3xl text-[#F6F2EA]">Reservation Confirmed</h4>
                <p className="text-xs text-[#B9B6AF] max-w-md mx-auto">
                  We look forward to welcoming you to Ember &amp; Oak. A confirmation email has been dispatched to <span className="text-[#F6F2EA]">{guestInfo.email}</span>.
                </p>
              </div>

              {/* Ticket Card */}
              <div className="glass-panel p-6 rounded-2xl border border-white/10 max-w-lg mx-auto text-left space-y-4 font-mono text-xs text-[#F6F2EA]">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-[#7C8A58]">GUEST NAME</span>
                  <span>{guestInfo.firstName} {guestInfo.lastName}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-[#7C8A58]">SANCTUM</span>
                  <span>{currentRoomObj.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-[#7C8A58]">DATE &amp; TIME</span>
                  <span>{selectedDate} · {selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7C8A58]">PARTY SIZE</span>
                  <span>{guestCount} Guests</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center space-x-4">
                <button
                  onClick={resetAndClose}
                  className="px-8 py-3 bg-[#7C8A58] text-[#0E0F0F] rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#F6F2EA] transition-all"
                >
                  Return to Journal
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, MessageCircle, CheckCircle2, Send, MapPin } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, preselectedService = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: preselectedService || "Commercial & Ad Film",
    budget: "₹2 Lakhs – ₹5 Lakhs",
    timeline: "Within 2 Weeks",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const servicesList = [
    "Commercial & Ad Film",
    "Music Video & Single Launch",
    "Photography & Studio Space",
    "Artist Management & Growth",
    "Live Event & Stage Production",
    "Post-Production & Color Grading"
  ];

  const budgetOptions = [
    "₹50,000 – ₹2 Lakhs",
    "₹2 Lakhs – ₹5 Lakhs",
    "₹5 Lakhs – ₹15 Lakhs",
    "₹15 Lakhs+ (Scale)"
  ];

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*New Project Inquiry - Joshi Productions*\n\n` +
      `*Name:* ${formData.name || 'Not provided'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Service Required:* ${formData.service}\n` +
      `*Budget:* ${formData.budget}\n` +
      `*Timeline:* ${formData.timeline}\n` +
      `*Project Brief:* ${formData.message || 'No additional note'}\n\n` +
      `Looking forward to discussing with your team in Hyderabad!`
    );
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full sm:max-w-xl bg-white border border-zinc-200 sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col z-10 text-zinc-900">
        
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-zinc-200 flex items-center justify-between bg-zinc-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 p-1 flex items-center justify-center shadow-xs">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg text-zinc-900">
                Book a Shoot / Inquire
              </h3>
              <p className="text-xs text-zinc-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#ff6200]" /> Hyderabad Studio & Production Hub
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-200/70 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-bold text-xl text-zinc-900">Inquiry Received!</h4>
              <p className="text-sm text-zinc-600 max-w-sm mx-auto">
                Thank you! Our executive producer in Hyderabad will get back to you within 2 business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#ff6200] text-white text-xs font-bold"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                  Select Production Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 text-xs focus:outline-none focus:border-[#ff6200] transition-colors"
                >
                  {servicesList.map((srv) => (
                    <option key={srv} value={srv}>
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Reddy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#ff6200] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#ff6200] transition-colors"
                  />
                </div>
              </div>

              {/* Email & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#ff6200] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">Project Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 text-xs focus:outline-none focus:border-[#ff6200] transition-colors"
                  >
                    <option value="Immediate (This Week)">Immediate (This Week)</option>
                    <option value="Within 2 Weeks">Within 2 Weeks</option>
                    <option value="Next 30-45 Days">Next 30-45 Days</option>
                    <option value="Exploring & Planning">Exploring & Planning</option>
                  </select>
                </div>
              </div>

              {/* Budget Range selector */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-2">Estimated Budget Range</label>
                <div className="grid grid-cols-2 gap-2">
                  {budgetOptions.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                        formData.budget === b
                          ? "bg-orange-50 border-[#ff6200] text-[#ff6200]"
                          : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-300"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message / Brief */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5">Project Brief</label>
                <textarea
                  rows="3"
                  placeholder="Share details about your concept, reference moodboard, or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#ff6200] transition-colors"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleCallbackSubmit}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#ff6200] hover:bg-[#e55800] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Callback</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-zinc-500 pt-1">
                🔒 Guaranteed confidentiality • Direct response from Joshi Productions Hyderabad
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';
import { useLang } from '@/i18n/LangContext';

const Booking = () => {
  const { t } = useLang();
  const b = t.booking;
  const f = b.form;

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', date: '',
    time: '', passengers: '', pickup: '', destination: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = f.serviceOptions[formData.service as keyof typeof f.serviceOptions] || formData.service;
    const subject = encodeURIComponent(b.emailSubject(serviceName, formData.date));
    const body = encodeURIComponent(b.emailBody({ ...formData, service: serviceName }));
    window.location.href = `mailto:info@vipshuttle24.de?subject=${subject}&body=${body}`;
  };

  return (
    <section id="booking" className="py-16 lg:py-32 bg-midnight relative overflow-hidden" aria-label={b.sectionLabel}>
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-silver/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-platinum/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <div className="inline-block px-5 py-2 glass-card mb-5">
            <span className="text-silver text-xs sm:text-sm font-medium tracking-widest uppercase">{b.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-4 leading-tight">{b.headline}</h2>
          <p className="text-silver/70 text-sm sm:text-base lg:text-lg leading-relaxed">{b.subline}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">

          {/* Left column */}
          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="glass-card p-6 sm:p-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-silver mb-4">{b.contact.title}</h3>

              <a href="tel:+491772472408" className="flex items-center space-x-4 p-3 sm:p-4 glass-card hover:shadow-glow transition-all duration-300 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-silver/20 to-platinum/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-silver text-base sm:text-lg" /></div>
                <div>
                  <div className="text-xs text-platinum mb-0.5 font-medium tracking-wider uppercase">{b.contact.phone}</div>
                  <div className="text-silver font-semibold text-sm sm:text-base">+49 177 2472408</div>
                  <div className="text-silver/60 text-xs mt-0.5">{b.contact.phoneAvail}</div>
                </div>
              </a>

              <a href="https://wa.me/+491772472408" target="_blank" rel="noopener noreferrer"
                className="flex items-center space-x-4 p-3 sm:p-4 glass-card hover:shadow-glow transition-all duration-300 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-silver/20 to-platinum/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-silver text-base sm:text-lg" /></div>
                <div>
                  <div className="text-xs text-platinum mb-0.5 font-medium tracking-wider uppercase">{b.contact.whatsapp}</div>
                  <div className="text-silver font-semibold text-sm sm:text-base">{b.contact.whatsappDirect}</div>
                  <div className="text-silver/60 text-xs mt-0.5">{b.contact.whatsappSub}</div>
                </div>
              </a>

              <a href="mailto:info@vipshuttle24.de"
                className="flex items-center space-x-4 p-3 sm:p-4 glass-card hover:shadow-glow transition-all duration-300 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-silver/20 to-platinum/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-silver text-base sm:text-lg" /></div>
                <div>
                  <div className="text-xs text-platinum mb-0.5 font-medium tracking-wider uppercase">{b.contact.email}</div>
                  <div className="text-silver font-semibold text-sm sm:text-base">info@vipshuttle24.de</div>
                  <div className="text-silver/60 text-xs mt-0.5">{b.contact.emailSub}</div>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-3 sm:p-4 glass-card">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-silver/20 to-platinum/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-silver text-base sm:text-lg" /></div>
                <div>
                  <div className="text-xs text-platinum mb-0.5 font-medium tracking-wider uppercase">{b.contact.address}</div>
                  <address className="not-italic">
                    <div className="text-silver font-semibold text-sm sm:text-base">Schlesische Str. 104</div>
                    <div className="text-silver font-semibold text-sm sm:text-base mb-1">40231 Düsseldorf</div>
                  </address>
                  <a href="https://maps.google.com/?q=Schlesische+Str.+104+40231+Düsseldorf" target="_blank" rel="noopener noreferrer"
                    className="text-platinum text-xs hover:text-silver transition-colors duration-300">{b.contact.mapLink}</a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-silver/20 to-platinum/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-silver text-base sm:text-lg" /></div>
                <div>
                  <h4 className="text-base sm:text-lg font-display font-bold text-silver mb-2">{b.contact.availTitle}</h4>
                  <div className="text-silver/70 space-y-1 text-xs sm:text-sm">
                    <p>{b.contact.availText}</p>
                    <p className="text-platinum font-medium">{b.contact.availEmphasis}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 flex-1">
              <h4 className="text-base sm:text-lg font-display font-bold text-silver mb-5">{b.why.title}</h4>
              <div className="space-y-4">
                {b.why.items.map((item) => (
                  <div key={item.title} className="flex items-start space-x-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-silver/30 to-platinum/30 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-silver rounded-full" /></div>
                    <div>
                      <p className="text-silver font-semibold text-sm">{item.title}</p>
                      <p className="text-silver/60 text-xs mt-0.5 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-silver/80 text-xs sm:text-sm font-medium mb-1.5">{f.name} *</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                  className="input-premium" placeholder={f.namePlaceholder} autoComplete="name" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-silver/80 text-xs sm:text-sm font-medium mb-1.5">{f.email} *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                    className="input-premium" placeholder={f.emailPlaceholder} autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-silver/80 text-xs sm:text-sm font-medium mb-1.5">{f.phone} *</label>
                  <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange}
                    className="input-premium" placeholder={f.phonePlaceholder} autoComplete="tel" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-silver/80 text-xs sm:text-sm font-medium mb-1.5">{f.service} *</label>
                <select id="service" name="service" required value={formData.service} onChange={handleChange} className="input-premium">
                  <option value="">{f.servicePlaceholder}</option>
                  {Object.entries(f.serviceOptions).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-silver/80 text-xs sm:text-sm font-medium mb-1.5">{f.date} *</label>
                  <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} className="input-premium" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-silver/80 text-xs sm:text-sm font-medium mb-1.5">{f.time} *</label>
                  <input type="time" id="time" name="time" required value={formData.time} onChange={handleChange} className="input-premium" />
                </div>
              </div>

              <div>
                <label htmlFor="passengers" className="block text-silver/80 text-xs sm:text-sm font-medium mb-1.5">{f.passengers}</label>
                <select id="passengers" name="passengers" value={formData.passengers} onChange={handleChange} className="input-premium">
                  <option value="">{f.passengerPlaceholder}</option>
                  {['1', '2', '3', '4', '5', '6', '7+'].map((n) => (
                    <option key={n} value={n}>{n} {n === '1' ? f.person : f.persons}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="pickup" className="block text-silver/80 text-xs sm:text-sm font-medium mb-1.5">{f.pickup} *</label>
                <input type="text" id="pickup" name="pickup" required value={formData.pickup} onChange={handleChange}
                  className="input-premium" placeholder={f.pickupPlaceholder} />
              </div>

              <div>
                <label htmlFor="destination" className="block text-silver/80 text-xs sm:text-sm font-medium mb-1.5">{f.destination} *</label>
                <input type="text" id="destination" name="destination" required value={formData.destination} onChange={handleChange}
                  className="input-premium" placeholder={f.destinationPlaceholder} />
              </div>

              <div>
                <label htmlFor="message" className="block text-silver/80 text-xs sm:text-sm font-medium mb-1.5">{f.message}</label>
                <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange}
                  className="input-premium resize-none" placeholder={f.messagePlaceholder} />
              </div>

              <p className="text-xs text-silver/40">{f.required}</p>

              <button type="submit" className="btn-primary w-full justify-center flex items-center gap-2 text-sm sm:text-base">
                <FaEnvelope className="text-sm flex-shrink-0" aria-hidden="true" />
                {f.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;

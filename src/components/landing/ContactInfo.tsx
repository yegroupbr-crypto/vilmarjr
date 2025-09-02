'use client';

import { MapPin, Phone } from 'lucide-react';

interface ContactInfoProps {
  officeLocation: string;
  city: string;
  phone: string;
}

export default function ContactInfo({ officeLocation, city, phone }: ContactInfoProps) {
  const handleMapClick = () => {
    window.open(`https://maps.google.com/?q=${officeLocation}+${city}`, '_blank');
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl p-8 mb-12 border border-white/10">
      <h3 className="text-xl font-black text-white mb-8 text-center">
        Informações de Contato
      </h3>
      
      <button
        onClick={handleMapClick}
        className="group w-full text-left p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-start gap-4 mb-6 border border-white/10 hover:border-white/20 transform hover:scale-[1.01]"
      >
        <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl">
          <MapPin size={20} className="text-white" />
        </div>
        <div className="flex-1">
          <div className="font-bold text-white text-base mb-1">Escritório</div>
          <div className="text-slate-300 font-medium text-sm leading-relaxed">
            {officeLocation}<br />
            {city}
          </div>
          <div className="text-xs text-amber-400 mt-2 font-semibold group-hover:text-amber-300 transition-colors">
            Ver no mapa →
          </div>
        </div>
      </button>

      <div className="p-6 rounded-xl bg-white/5 flex items-center gap-4 border border-white/10">
        <div className="p-3 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl">
          <Phone size={20} className="text-white" />
        </div>
        <div>
          <div className="font-bold text-white text-base">Telefone</div>
          <div className="text-slate-300 font-medium text-sm">{phone}</div>
        </div>
      </div>
    </div>
  );
}

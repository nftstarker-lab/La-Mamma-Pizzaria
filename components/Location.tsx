import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-brand-gray relative border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Info */}
          <div>
            <h3 className="text-brand-orange font-bold tracking-wider uppercase mb-2">Visite-nos</h3>
            <h2 className="font-display text-4xl text-white mb-8">ONDE A MÁGICA ACONTECE</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-dark p-3 rounded-lg border border-gray-700">
                  <MapPin className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Endereço</h4>
                  <p className="text-gray-400">Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-dark p-3 rounded-lg border border-gray-700">
                  <Clock className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Horários</h4>
                  <p className="text-gray-400">Ter - Qui: 18h - 23h</p>
                  <p className="text-gray-400">Sex - Sáb: 18h - 01h</p>
                  <p className="text-gray-400">Domingo: 17h - 22h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-dark p-3 rounded-lg border border-gray-700">
                  <Phone className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Contato</h4>
                  <p className="text-gray-400 mb-2">+591 77850023</p>
                  <p className="text-gray-400">contato@lamamma.com</p>
                  
                  <a 
                    href="https://wa.me/59177850023"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-brand-orange hover:text-white border-b border-brand-orange hover:border-white transition-colors text-sm font-bold"
                  >
                    Chamar no WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] w-full bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975870295!2d-46.65219368502227!3d-23.563099384682035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1sen!2sbr!4v1647891234567!5m2!1sen!2sbr" 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
               allowFullScreen={true} 
               loading="lazy"
               title="Google Map"
             ></iframe>
             <div className="absolute bottom-4 right-4 bg-brand-orange text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg pointer-events-none">
                Valet no Local
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
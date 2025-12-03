import React from 'react';
import { Award, Users, Flame } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?q=80&w=600&auto=format&fit=crop" className="rounded-2xl w-full h-full object-cover transform translate-y-8 shadow-2xl" alt="Massa fresca" />
             <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop" className="rounded-2xl w-full h-full object-cover transform -translate-y-8 shadow-2xl border-4 border-brand-gray" alt="Pizzaiolo" />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-brand-orange font-bold tracking-wider uppercase mb-2">Nossa Paixão</h3>
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
              FERMENTAÇÃO LENTA, <br />
              SABOR INTENSO.
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Na La Mamma, acreditamos que a pressa é inimiga da perfeição. Nossa massa descansa por 
              no mínimo 48 horas, resultando em uma borda aerada, leve e crocante.
              Utilizamos farinha 00 importada da Itália e tomates San Marzano colhidos aos pés do Vesúvio.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Cada pizza é aberta à mão e assada em nosso forno a lenha a 480°C por exatos 90 segundos.
              O resultado é uma verdadeira obra-prima napolitana.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-brand-gray rounded-xl border border-gray-800">
                <Award className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                <span className="block font-bold text-2xl">AVPN</span>
                <span className="text-xs text-gray-500 uppercase">Certificada</span>
              </div>
              <div className="text-center p-4 bg-brand-gray rounded-xl border border-gray-800">
                <Users className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                <span className="block font-bold text-2xl">15k+</span>
                <span className="text-xs text-gray-500 uppercase">Fãs da Pizza</span>
              </div>
              <div className="text-center p-4 bg-brand-gray rounded-xl border border-gray-800">
                <Flame className="w-8 h-8 text-brand-orange mx-auto mb-2" />
                <span className="block font-bold text-2xl">480°C</span>
                <span className="text-xs text-gray-500 uppercase">Forno a Lenha</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';

const Vision: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-emerald-200 rounded-3xl transform rotate-3"></div>
            <img 
              src="https://picsum.photos/800/600?random=2" 
              alt="Visi Misi Pesantren"
              className="relative w-full h-auto object-cover rounded-3xl shadow-2xl"
            />
          </div>
          <div>
            <span className="text-emerald-600 font-semibold">Visi & Misi</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-emerald-900 mb-6">
              Menjadi Pusat Peradaban Islam Berbasis Digital
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Mencetak generasi santri yang tidak hanya menguasai ilmu agama,
              tetapi juga mahir dalam teknologi, berjiwa wirausaha, dan siap
              berkontribusi untuk kemajuan umat dan bangsa.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500 text-white flex items-center justify-center mr-4 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-gray-700">Menyediakan akses pendidikan berkualitas yang menggabungkan tradisi dan inovasi.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500 text-white flex items-center justify-center mr-4 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-gray-700">Membangun ekosistem ekonomi syariah yang mandiri dan berkelanjutan.</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500 text-white flex items-center justify-center mr-4 mt-1">
                   <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-gray-700">Memperkuat jaringan komunitas dan alumni sebagai pilar dakwah di era digital.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

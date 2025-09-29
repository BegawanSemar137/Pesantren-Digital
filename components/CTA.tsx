
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-emerald-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Siap Menjadi Bagian dari Transformasi?
          </h2>
          <p className="mt-4 text-lg text-emerald-100 max-w-3xl mx-auto">
            Bergabunglah dengan ribuan santri, ustadz, dan penggerak ekonomi
            umat dalam ekosistem digital Pesantren Go Digital.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block bg-white text-emerald-700 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300 shadow-xl"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

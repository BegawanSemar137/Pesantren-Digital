import React from 'react';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { ShoppingCartIcon } from './icons/ShoppingCartIcon';
import { UsersIcon } from './icons/UsersIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const featuresData = [
    {
      icon: <BookOpenIcon className="h-8 w-8" />,
      title: 'Pendidikan & Dakwah',
      description: 'Kelas online interaktif, dari kitab kuning klasik hingga keterampilan digital modern untuk santri.',
    },
    {
      icon: <ShoppingCartIcon className="h-8 w-8" />,
      title: 'Ekonomi Pesantren',
      description: 'Marketplace untuk produk unggulan santri dan UMKM lokal, mendorong kemandirian ekonomi.',
    },
    {
      icon: <UsersIcon className="h-8 w-8" />,
      title: 'Komunitas & Alumni',
      description: 'Wadah digital untuk santri, ustadz, dan alumni untuk berdiskusi, berkolaborasi, dan bersilaturahmi.',
    },
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: 'Manajemen Pesantren',
      description: 'Sistem administrasi dan keuangan modern yang transparan dan efisien untuk pengelolaan pesantren.',
    },
  ];

  return (
    <section id="program" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
            Platform Terpadu untuk Kemajuan Pesantren
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan solusi digital lengkap untuk menjawab tantangan zaman,
            memajukan pesantren dari segala sisi.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
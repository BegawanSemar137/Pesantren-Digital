
import React from 'react';
import { LogoIcon } from './icons/LogoIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <LogoIcon className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold font-cairo text-white">
                Pesantren Go Digital
              </span>
            </a>
            <p className="text-emerald-200 text-sm">
              Membangun peradaban Islam modern melalui teknologi dan inovasi.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Fitur Utama</h4>
            <ul className="space-y-2 text-emerald-200">
              <li><a href="#" className="hover:text-amber-400">E-Learning</a></li>
              <li><a href="#" className="hover:text-amber-400">Marketplace</a></li>
              <li><a href="#" className="hover:text-amber-400">Komunitas</a></li>
              <li><a href="#" className="hover:text-amber-400">Donasi Digital</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Tentang Kami</h4>
            <ul className="space-y-2 text-emerald-200">
              <li><a href="#" className="hover:text-amber-400">Visi & Misi</a></li>
              <li><a href="#" className="hover:text-amber-400">Kontak</a></li>
              <li><a href="#" className="hover:text-amber-400">Karir</a></li>
              <li><a href="#" className="hover:text-amber-400">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              {/* Placeholder for social icons */}
              <a href="#" className="text-emerald-200 hover:text-amber-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-emerald-200 hover:text-amber-400">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-emerald-800 text-center text-sm text-emerald-300">
          <p>&copy; {new Date().getFullYear()} Pesantren Go Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

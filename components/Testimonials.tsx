import React, { useState, useEffect, useCallback } from 'react';

const TestimonialCard: React.FC<{ quote: string; name: string; role: string; avatar: string }> = ({ quote, name, role, avatar }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col justify-between min-h-[280px] sm:min-h-[250px]">
        <div className="flex-grow">
            <p className="text-gray-600 italic text-lg leading-relaxed">"{quote}"</p>
        </div>
        <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
            <img className="h-14 w-14 rounded-full object-cover mr-4" src={avatar} alt={name} />
            <div>
                <p className="font-bold text-gray-800 text-lg">{name}</p>
                <p className="text-sm text-emerald-600 font-medium">{role}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    const testimonialsData = [
        {
            quote: "Platform ini membuka wawasan saya. Belajar kitab kuning jadi lebih mudah, ditambah bisa belajar coding juga. Luar biasa!",
            name: 'Ahmad Fauzi',
            role: 'Santri Digital',
            avatar: 'https://picsum.photos/100/100?random=3'
        },
        {
            quote: "Alhamdulillah, produk UMKM kami sekarang bisa diakses lebih banyak orang. Omset meningkat sejak bergabung di marketplace ini.",
            name: 'Ibu Siti Aminah',
            role: 'Pemilik UMKM Binaan',
            avatar: 'https://picsum.photos/100/100?random=4'
        },
        {
            quote: "Sebagai alumni, saya merasa lebih terhubung dengan almamater. Forum diskusinya sangat aktif dan bermanfaat untuk networking.",
            name: 'Dr. Hasan Abdullah',
            role: 'Alumni & Donatur',
            avatar: 'https://picsum.photos/100/100?random=5'
        },
        {
            quote: "Manajemen pesantren menjadi jauh lebih efisien dan transparan. Laporan keuangan dan data santri bisa diakses kapan saja.",
            name: 'K.H. Mahmudin',
            role: 'Pimpinan Pesantren',
            avatar: 'https://picsum.photos/100/100?random=6'
        },
        {
            quote: "Saya bisa memantau perkembangan akademik dan keuangan anak saya dengan mudah. Fitur yang sangat membantu bagi wali santri.",
            name: 'Bapak Ridwan Kamil',
            role: 'Wali Santri',
            avatar: 'https://picsum.photos/100/100?random=7'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, [testimonialsData.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <section id="komunitas" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
                        Apa Kata Mereka?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Cerita inspiratif dari santri, pengusaha, dan alumni yang telah
                        merasakan manfaat platform kami.
                    </p>
                </div>
                
                <div className="relative max-w-3xl mx-auto">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonialsData.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0 p-2">
                                    <TestimonialCard {...testimonial} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all z-10"
                        aria-label="Previous testimonial"
                    >
                        <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all z-10"
                        aria-label="Next testimonial"
                    >
                        <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center mt-8 space-x-3">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-emerald-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                                aria-current={index === currentIndex}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Testimonials;
import React from 'react';

const ProductCard: React.FC<{ imageUrl: string; name: string; price: string }> = ({ imageUrl, name, price }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
        <div className="overflow-hidden">
            <img src={imageUrl} alt={name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="p-4">
            <h4 className="font-bold text-lg text-gray-800 truncate">{name}</h4>
            <p className="text-emerald-600 font-semibold">{price}</p>
        </div>
    </div>
);

const MarketplacePreview: React.FC = () => {
    const products = [
        { name: 'Madu Hutan Asli', price: 'Rp 120.000', imageUrl: 'https://picsum.photos/400/300?random=10' },
        { name: 'Kain Tenun Khas', price: 'Rp 250.000', imageUrl: 'https://picsum.photos/400/300?random=11' },
        { name: 'Keripik Singkong Premium', price: 'Rp 25.000', imageUrl: 'https://picsum.photos/400/300?random=12' },
        { name: 'Jasa Desain Grafis', price: 'Mulai Rp 300.000', imageUrl: 'https://picsum.photos/400/300?random=13' },
    ];

    return (
        <section id="marketplace" className="py-20 bg-emerald-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900">
                        Marketplace Pesantren & UMKM
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Temukan produk berkualitas hasil karya santri dan UMKM sekitar.
                        Belanja sambil memberdayakan ekonomi umat.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="inline-block bg-amber-400 text-emerald-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-amber-500 transition-transform transform hover:scale-105 duration-300 shadow-lg"
                    >
                        Kunjungi Marketplace
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MarketplacePreview;
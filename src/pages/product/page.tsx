import { useParams, useNavigate } from 'react-router-dom';
import { products } from '@/data/products';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-[#1E3A8A] font-semibold hover:underline"
        >
          ← Back to Collection
        </button>

        <div className="bg-white rounded-3xl shadow-xl p-10 grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold bg-[#FFD54F]/20 text-[#1E3A8A]">
              {product.category}
            </span>

            <h1 className="text-4xl font-bold text-[#1E3A8A] font-['Playfair_Display',serif] mb-4">
              {product.name}
            </h1>

            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="mb-6">
              <span className="inline-block bg-[#FFD54F] px-4 py-2 rounded-full text-sm font-semibold text-[#1E3A8A]">
                {product.warranty}
              </span>
            </div>

            <div className="flex gap-4">
              <a
                href="tel:+919876543210"
                className="px-6 py-3 bg-[#1E3A8A] text-white rounded-full font-semibold hover:bg-[#163174]"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-600"
                >
                  <span className="text-[#FFD54F] font-bold">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

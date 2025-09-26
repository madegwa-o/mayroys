import Image from 'next/image';

// Sample food data - replace with your actual products
const foodItems = [
  {
    id: 1,
    name: "Kebab",
    price: "sh 80.00",
    image: "/kebab.jpg", // Replace with actual image paths
  },
  {
    id: 2,
    name: "Full course Lunch",
    price: "R 89.99",
    image: "/lunch.jpg",
  },
  {
    id: 3,
    name: "Organic Fruits Mix",
    price: "R 120.00",
    image: "/api/placeholder/300/200",
  },
  {
    id: 4,
    name: "Seasoned Meet",
    price: "R 45.00",
    image: "/nyama.jpg",
  },
];

export default function Home() {
  const phoneNumber = "0741446987";
  const whatsappNumber = phoneNumber.replace(/\s/g, ""); // Remove spaces for WhatsApp URL

  const createWhatsAppLink = (foodName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in ordering ${foodName} from May Royce Foods.`);
    return `https://wa.me/254${whatsappNumber.substring(1)}?text=${message}`;
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Header Section */}
        <header className="bg-white shadow-lg border-b-4 border-emerald-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                <span className="text-emerald-600">May Royce</span> Foods
              </h1>
              <div className="flex items-center justify-center space-x-2 text-xl text-gray-600">
                <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-semibold">{phoneNumber}</span>
              </div>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Fresh, quality food delivered to your doorstep. Order now through WhatsApp!
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foodItems.map((item) => (
                <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                >
                  {/* Image Container */}
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                      {item.name}
                    </h3>

                    <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-emerald-600">
                    {item.price}
                  </span>
                    </div>

                    {/* WhatsApp Button */}
                    <a
                        href={createWhatsAppLink(item.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2 group/btn"
                    >
                      <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-xl font-semibold text-emerald-400 mb-2">May Royce Foods</h3>
            <p className="text-gray-300 mb-4">Quality food, delivered fresh</p>
            <div className="flex items-center justify-center space-x-2 text-lg">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{phoneNumber}</span>
            </div>
          </div>
        </footer>
      </div>
  );
}
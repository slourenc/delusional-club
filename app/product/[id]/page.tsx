import { ProductDetailClient } from './ProductDetailClient';

// Same product data as the main page
const mockProducts = [
  {
    id: 'dc001',
    name: 'DELUSIONAL CLUB CAP',
    price: 24.99,
    image: '/images/products/void-walker-cap.svg',
    description: '4 EMBROIDERED DESIGNS - CLASSIC BASEBALL CAP SHAPE - VENTILATION EYELETS EMBROIDERED ON TOP - ADJUSTABLE BUCKLE IN THE BACK',
    category: 'Caps',
    stock: 8,
    materials: '100% cotton',
    embroidery: '100% Polyester'
  },
  {
    id: 'dc002',
    name: 'DELUSIONAL GLOVES',
    price: 18.99,
    image: '/images/products/delusional-gloves.svg',
    description: 'Professional work gloves with DELUSIONAL branding and safety symbols.',
    category: 'Gloves',
    stock: 12,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'dc003',
    name: 'BLACK TRACKSUIT SET',
    price: 89.99,
    image: '/images/products/black-tracksuit.svg',
    description: 'Complete hoodie and pants set with signature styling.',
    category: 'Sets',
    stock: 5,
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'dc004',
    name: 'DELUSIONAL TEE',
    price: 32.99,
    image: '/images/products/delusional-tee.svg',
    description: 'Classic black tee with DC delusional branding.',
    category: 'T-Shirts',
    stock: 15,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'dc005',
    name: 'VOID BEANIE',
    price: 19.99,
    image: '/images/products/beanie.svg',
    description: 'Ribbed knit beanie with DC label.',
    category: 'Caps',
    stock: 10
  },
  {
    id: 'dc006',
    name: 'NIGHTMARE SCARF',
    price: 28.99,
    image: '/images/products/scarf.svg',
    description: 'Black scarf with fringe details and NIGHTMARE embroidery.',
    category: 'Accessories',
    stock: 7
  }
];

// Generate static params for all products
export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    id: product.id,
  }));
}

interface PageProps {
  params: { id: string };
}

const ProductDetailPage = ({ params }: PageProps) => {
  const product = mockProducts.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#000000' }}>
        <div className="text-center">
          <h1 className="text-2xl font-mono mb-4" style={{ color: '#DC143C' }}>
            PRODUCT NOT FOUND
          </h1>
          <a 
            href="/"
            className="px-6 py-3 border-2 font-mono text-sm uppercase tracking-wider transition-all duration-300 inline-block"
            style={{
              borderColor: '#DC143C',
              color: '#DC143C',
              background: 'transparent',
              textDecoration: 'none'
            }}
          >
            RETURN TO CATALOG
          </a>
        </div>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
};

export default ProductDetailPage; 
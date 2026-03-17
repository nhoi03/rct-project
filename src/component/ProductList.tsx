import { useState } from 'react';
import ProductCard from './ProductCard'; 
import type { Product } from './ProductCard'; // Import kiểu dữ liệu Product từ ProductCard


const ProductList = () => {
  
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "iPhone 15 Pro", price: 28000000, isLiked: false },
    { id: 2, name: "MacBook Air M2", price: 24000000, isLiked: false },
    { id: 3, name: "AirPods Pro 2", price: 5000000, isLiked: true },
  ]);

  
  const handleToggleLike = (productId: number) => {
    const updatedProducts = products.map(p => {
      if (p.id === productId) {
        return { ...p, isLiked: !p.isLiked };
      }
      return p;
    });

    setProducts(updatedProducts);
  };

  return (
    <>
        <div style={{ padding: '20px' }}>
        <h1>Cửa hàng Công nghệ</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {}
            {products.map((item) => (
            <ProductCard 
                key={item.id}         
                product={item}        
                onToggleLike={handleToggleLike} 
            />
            ))}
        </div>
        </div>
    </>
  );
};

export default ProductList;

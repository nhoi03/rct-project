 export interface Product {
  id: number;
  name: string;
  price: number;
  isLiked: boolean;
}
interface ProductCardProps {
  product: Product;           // Dữ liệu của một sản phẩm
  onToggleLike: (id: number) => void; // Một hàm xử lý sự kiện truyền từ Cha xuống
}

const ProductCard = ({ product, onToggleLike }: ProductCardProps) => {
  return (
    <>
        <div style={{
        border: '1px solid #ddd',
        padding: '15px',
        margin: '10px',
        borderRadius: '8px',
        backgroundColor: product.isLiked ? '#0b0808' : '#f7f7f7'
        }}>
        <h3>{product.name}</h3>
        <p>Giá: {product.price.toLocaleString()} VNĐ</p>
        
        {/* Khi click nút, gọi hàm onToggleLike được Cha truyền xuống */}
        <button onClick={() => onToggleLike(product.id)}>
            {product.isLiked ? '❤️ Đã thích' : '🤍 Yêu thích'}
        </button>
        </div>
    </>
  );
};

export default ProductCard;

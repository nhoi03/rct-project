import React from "react";

import gamesData from '../data/games.json';

interface Game {
    id: number;
    title: string;
    price: number;
    categoryId: number;
    isFeatured: boolean;
    platforms: string[];
    rating: number;
    releaseDate: string;
}



const GameLists = () => {
    return (
        <div style={{ padding: '20px', backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
      <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: '30px' }}>
        DANH SÁCH TRÒ CHƠI (20)
      </h2>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '25px' 
      }}>

        {gamesData.map((game: Game) => (
          <div 
            key={game.id}
            style={{
                backgroundColor: '#2d2d2d',
                color: '#fff',
                padding: '20px',
                borderRadius: '12px',
                position: 'relative',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
                }}
            >
                {game.isFeatured && (
                    <span style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        backgroundColor: '#e74c3c',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                    }}>
                        NỔI BẬT
                    </span>
                )}

                <div>   
                    <h3 style={{ margin: '0 0 10px 0', color: '#1e90ff' }}>{game.title}</h3>
                    <p style={{ margin: '5px 0', fontSize: '14px', color: '#ccc' }}>
                        Ngày phát hành: {game.releaseDate}
                    </p>
                    
                    
                    <p style={{ fontSize: '14px' }}>
                        💻 Nền tảng: <span style={{ color: '#ffa502' }}>{game.platforms.join(', ')}</span>
                    </p>
                    
                    <p style={{ fontSize: '14px' }}>
                        ⭐ Đánh giá: {game.rating} / 5
                    </p>
                </div>



                <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#2ed573' }}>
                {game.price === 0 ? "MIỄN PHÍ" : `${game.price}$`}
              </span>
              <button style={{
                backgroundColor: '#1e90ff',
                color: 'white',
                border: 'none',
                padding: '8px 15px',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Mua ngay
              </button>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default GameLists;

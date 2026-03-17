import './Header.css'
import { useEffect, useState } from 'react';
const Header =  ()=> {
  const [name, setName] = useState<string>('T2512E');
  const [email, setEmail] = useState<string>('nhoi@gmail.com');
  const [countNumber, setCountNumber] = useState<number>(0);
  const [text, setText] = useState<string>('');
  function demo(){
    setCountNumber(countNumber + 1);
  }

  useEffect(() => {
    document.title = `${text} ${countNumber}`; ;
  }, [text, countNumber]);


  return (
    
    <>  
      <header>
        <h1>Welcome {name}</h1>
        <div>
          <p>Email: {email}</p>
        </div>
        <div>
          <p>Count: {countNumber}</p>
          <button onClick={demo}>click</button>
        </div>
        <div>
        <input 
          type="text" 
          placeholder="Nhập tiêu đề trang..." 
          onChange={(e) => setText(e.target.value)} 
        />
        <p>Giá trị hiện tại: {text}</p>
        </div>



      </header>
    
    </>)}
export default Header;
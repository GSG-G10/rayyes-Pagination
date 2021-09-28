import './App.css';
import 'antd/dist/antd.css';  
import { Pagination, Card } from 'antd';
import React , {useState, useEffect} from 'react';

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);


  useEffect(() => {
        fetch(`https://api.unsplash.com/search/collections?page=${query}&limit=10&query=cat&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`)
      .then((res) => res.json())
      .then((res) => setResults(res.results));
  }, [`https://api.unsplash.com/search/collections?page=${query}&limit=10&query=cat&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`]);

  return (
    <div>
      { results.map((i) => (
        
        <img src={i.preview_photos[0].urls.small} alt="img"  style={{maxHeight :130 , maxWidth: 150}} />
        
        ))}
    <Pagination query={query} onChange={setQuery} total={50} />
      </div>
    
  );
};


export default App;
  
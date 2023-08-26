import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar'
import Meme from './components/Meme'


export default function App() {
 
  return (
    <div>
    <Navbar/>
    <Meme />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 

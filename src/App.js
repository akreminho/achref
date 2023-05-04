import { useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import moviesData from './Components/assets/data/Data';
import Movielist from './Components/Movielist';

function App() {
  const [search, setSearch]=useState("")
  const [data, setData] = useState(moviesData)
  return (
    <div className="App">
<Navigation setSearch={setSearch}/>
<Movielist akrem={data}/>
    </div>
  );
}

export default App;

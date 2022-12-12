import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Pokemones from "./views/Pokemones";
import PokemonStats from "./views/PokemonStats";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/pokemones" element={ <Pokemones /> } />
          <Route path="*" element={ <NotFound /> } />
          <Route path="/pokemones/:id" element={ <PokemonStats /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

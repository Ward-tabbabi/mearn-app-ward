import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import GameAdd from "./component/GameAdd";
import GameList from "./component/GameList";
import Home from "./component/Home";
import Nav from "./component/Nav";
import { getGames } from "./js/gameslice/gameSlice";

function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);
  useEffect(() => {
    dispatch(getGames());
  }, [ping]);

  return (
    <div className="App">
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/games"
            element={<GameList ping={ping} setping={setping} />}
          />
          <Route
            path="/add"
            element={<GameAdd ping={ping} setping={setping} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

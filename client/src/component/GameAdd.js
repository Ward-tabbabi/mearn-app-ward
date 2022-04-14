import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addGames } from "../js/gameslice/gameSlice";

const GameAdd = ({ ping, setping }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [game, setgame] = useState({
    name: "",
    image: "",
    category: "",
    release_date: "",
  });
  return (
    <div className="Add">
      <p>name:</p>
      <input
        type="text"
        onChange={(e) => setgame({ ...game, name: e.target.value })}
      />
      <p>Category:</p>
      <select onChange={(e) => setgame({ ...game, category: e.target.value })}>
        <option value="moba">moba</option>
        <option value="fps">fps</option>
        <option value="tps">tps</option>
        <option value="rpg">rpg</option>
        <option value="arcade">arcade</option>
      </select>

      <p>release_date:</p>
      <input
        type="date"
        onChange={(e) => setgame({ ...game, release_date: e.target.value })}
      />
      <p>image:</p>
      <input
        type="text"
        onChange={(e) => setgame({ ...game, image: e.target.value })}
      />
      <button
        onClick={() => {
          dispatch(addGames(game));
          setping(!ping);
          setTimeout(() => {
            navigate("/games");
          }, 1000);
        }}
      >
        Add new game
      </button>
    </div>
  );
};

export default GameAdd;

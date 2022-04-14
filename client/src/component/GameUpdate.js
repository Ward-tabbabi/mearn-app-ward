import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateGames } from "../js/gameslice/gameSlice";

const GameUpdate = ({ id, setping, ping }) => {
  const [game, setgame] = useState({});
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      <button className="but" onClick={() => setshow(!show)}>
        update game
      </button>

      {show ? (
        <div className="update">
          <button onClick={() => setshow(!show)}>X</button>
          <p>name:</p>
          <input
            type="text"
            onChange={(e) => setgame({ ...game, name: e.target.value })}
          />
          <p>Category:</p>
          <select
            onChange={(e) => setgame({ ...game, category: e.target.value })}
          >
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
            className="up"
            onClick={() => {
              dispatch(updateGames({ id: id, game }));
              setping(!ping);
              setshow(!show);
            }}
          >
            Update game
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default GameUpdate;

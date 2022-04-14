import React from "react";
import { useDispatch } from "react-redux";
import { deleteGames } from "../js/gameslice/gameSlice";
import GameUpdate from "./GameUpdate";

const GameCard = ({ games, ping, setping }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="Card">
        <div>
          <img src={games.image} alt={games.name} />

          <div className="Card-details">
            <h1>{games.name}</h1>

            <p>{games.release_date}</p>
            <p>{games.rate}</p>
          </div>

          <button
            className="button"
            onClick={() => {
              dispatch(deleteGames(games._id));
              setping(!ping);
            }}
          >
            Delete
          </button>
          <GameUpdate ping={ping} setping={setping} id={games._id} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;

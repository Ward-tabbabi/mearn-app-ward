import React from "react";
import { useSelector } from "react-redux";
import GameCard from "./GameCard";

const GameList = ({ ping, setping }) => {
  const games = useSelector((state) => state.game.game);
  return (
    <div className="list">
      {games ? (
        games.map((el) => <GameCard games={el} ping={ping} setping={setping} />)
      ) : (
        <img
          alt=""
          src="data:image/jpeg;base64,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"
        />
      )}
    </div>
  );
};

export default GameList;
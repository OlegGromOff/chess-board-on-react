import React from 'react';
import ChessBlock from './chess-block';

const ChessBoard = () => {
  const chessFields = [];
  let flag = true;

  for (let i = 0; i < 8; i++) {
    for (let k = 0; k < 8; k++) {
      if (k === 0) { flag = !flag }

      if (flag) {
        chessFields.push(<ChessBlock class="chess-field black " />)
      }
      else {
        chessFields.push(<ChessBlock class="chess-field white " />)
      }
      flag = !flag;
    }
  }
  return (
    <div className="chess-block">
      {chessFields}
    </div>
  );
}
export default ChessBoard;




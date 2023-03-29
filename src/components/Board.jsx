import React from 'react';

import './Board.css';
import Square from './Square';

const Board = () => {
    return (
        <div className="board">
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
        </div>
    );
}

export default Board;

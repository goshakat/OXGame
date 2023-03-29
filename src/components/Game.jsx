import React, {useState, useEffect }  from 'react';
import Board from './Board';
import { algorithm } from '../helper';

import './Game.css';


const Game = () => {
    
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNExt] = useState(true)
    const winner = algorithm(board)

    useEffect(() => {
        document.title = 'Tic-tac-toe';
      }, []);

    const handleClick = (index) => {
        const boardCopy = [...board]

        if (winner || boardCopy[index]) return

        boardCopy[index] = xIsNext ? 'X' : 'O'

        setBoard(boardCopy)
        setXIsNExt(!xIsNext)
    }


    const startNewGame = () => {
        return (
            <button className='start__btn' onClick={() => {
                setXIsNExt(true)
                setBoard(Array(9).fill(null))
            }}>Очистить поле</button>
        )
    }

    return (
        <div className="wrapper">
            { startNewGame() }
            <Board squares={board} click={handleClick}/>
            <p className='game__info'>
                { winner ? 'Победитель ' + winner : 'Сейчас ходит ' + (xIsNext ? 'X' : 'O') }
            </p>
        </div>
    );
}

export default Game;

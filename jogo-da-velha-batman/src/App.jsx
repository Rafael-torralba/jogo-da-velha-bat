import { useState } from 'react';
import Board from './components/board';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const isDraw = squares.every(Boolean) && !winner;

  const handlePlay = (nextSquares) => {
    if (winner || isDraw) return;
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  let status;
  if (winner) {
    status = `Vencedor: ${winner === 'X' ? 'Morcego 🦇' : 'Bola Amarela 🟡'}`;
  } else if (isDraw) {
    status = 'Empate!';
  } else {
    status = `Próxima Jogada: ${xIsNext ? 'Morcego 🦇' : 'Bola Amarela 🟡'}`;
  }

  return (
    <div className="bg-dark text-warning min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-3">Jogo da Velha - Batman</h1>
      <h3 className="mb-4">{status}</h3>
      <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
      <button className="btn btn-warning mt-4" onClick={restartGame}>
        Reiniciar Jogo
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;

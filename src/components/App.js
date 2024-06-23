import React, { useState } from 'react';
import Hand from './Hand';
import Button from './Button';
import resetIcon from '../assets/ic-reset.svg';
import rockIcon from '../assets/rock.svg';
import scissorIcon from '../assets/scissor.svg';
import paperIcon from '../assets/paper.svg';
import '../index.css';

const choices = ['rock', 'scissor', 'paper'];
const icons = {
  rock: rockIcon,
  scissor: scissorIcon,
  paper: paperIcon,
};

function randomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player, opponent) {
  if (player === opponent) return 'draw';
  if (
    (player === 'rock' && opponent === 'scissor') ||
    (player === 'scissor' && opponent === 'paper') ||
    (player === 'paper' && opponent === 'rock')
  ) return 'player';
  return 'opponent';
}

function App() {
  const [playerChoice, setPlayerChoice] = useState("rock");
  const [opponentChoice, setOpponentChoice] = useState("rock");
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [history, setHistory] = useState([]);
  const [bet, setBet] = useState(1);

  const handlePlay = (choice) => {
    const opponentChoice = randomChoice();
    setPlayerChoice(choice);
    setOpponentChoice(opponentChoice);
    const winner = determineWinner(choice, opponentChoice);
    if (winner === "player") {
      setPlayerScore(playerScore + bet);
      setHistory([...history, "나"]);
    } else if (winner === "opponent") {
      setOpponentScore(opponentScore + bet);
      setHistory([...history, "상대"]);
    } else {
      setHistory([...history, "무승부"]);
    }
  };

  const handleReset = () => {
    setPlayerScore(0);
    setOpponentScore(0);
    setHistory([]);
  };

  return (
    <div className="App">
      <h1 className="App-heading">가위바위보</h1>
      <img
        className="App-reset"
        src={resetIcon}
        alt="초기화"
        onClick={handleReset}
      />
      <div className="App-scores">
        <div className="Score">
          <div className="Score-num">{playerScore}</div>
          <div className="Score-name">나</div>
        </div>
        <div className="App-versus">:</div>
        <div className="Score">
          <div className="Score-num">{opponentScore}</div>
          <div className="Score-name">상대</div>
        </div>
      </div>
      <div className="Box App-box">
        <div className="Box-inner">
          <div className="App-hands">
            <Hand icon={icons[playerChoice]} />
            <div className="App-versus">VS</div>
            <Hand icon={icons[opponentChoice]} />
          </div>
          <div className="App-bet">
            <span>배점</span>
            <input
              type="number"
              min="1"
              max="9"
              step="1"
              value={bet}
              onChange={(e) => setBet(Number(e.target.value))}
            />
            <span>배</span>
          </div>
          <div className="App-history">
            <h2>승부기록</h2>
            <p>{history.join(", ")}</p>
          </div>
        </div>
      </div>
      <div className="App-buttons">
        {choices.map((choice) => (
          <Button
            key={choice}
            icon={icons[choice]}
            onClick={() => handlePlay(choice)}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
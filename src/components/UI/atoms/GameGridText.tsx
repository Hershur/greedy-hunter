type GameGridTextProps = {
    gameGridText: string;
};

function GameGridText({gameGridText}: GameGridTextProps): JSX.Element {
    return (
        <div className="game-grid-text">{gameGridText}</div>
    ); 
}

export default GameGridText;
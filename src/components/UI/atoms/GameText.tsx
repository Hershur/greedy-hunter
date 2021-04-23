type GameTextProps = {
    gameText: string | JSX.Element;
};

function GameText({gameText}: GameTextProps): JSX.Element {
    return (<div className="game-text">{gameText}</div>); 
}

export default GameText;
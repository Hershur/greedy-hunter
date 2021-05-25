interface IGameDetailsProps {
    heading: JSX.Element,
    gameText: JSX.Element,
    gameText2?: JSX.Element,
    gameText3?: JSX.Element,
    gameGrid: JSX.Element,
    startGameButton: JSX.Element,
}

function GameDetails({heading, gameText, gameText2, gameText3, gameGrid, startGameButton}: IGameDetailsProps): JSX.Element {
    return (
        <div className="game-details">
            {heading}
            {gameText}
            {gameText2}
            {gameText3}
            {gameGrid}
            {startGameButton}
        </div>    
    ); 
}

export default GameDetails;

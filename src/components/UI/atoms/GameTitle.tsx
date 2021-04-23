type GamTitleProps = {
    gameTitle: string;
};

function GameTitle({gameTitle}: GamTitleProps): JSX.Element {
    return (
        <h1 className="heading-text">
            {gameTitle}
        </h1>
    ); 
}

export default GameTitle;
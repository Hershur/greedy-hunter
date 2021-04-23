interface IGameStartProps {
    bgMeshLeft: string,
    gameDetails: JSX.Element,
    bgMeshRight: string,
}

function GameStartTemplate({bgMeshLeft, gameDetails, bgMeshRight}: IGameStartProps): JSX.Element {
    return (
        <div className="game-start-page">
            <div className="bg-mesh bg-mesh-left">
                <img src={bgMeshLeft} alt="BG Mesh" />
            </div>
            
            {gameDetails}

            <div className="bg-mesh bg-mesh-right">
                <img src={bgMeshRight} alt="BG Mesh" />
            </div>
        </div>    
    ); 
}

export default GameStartTemplate;
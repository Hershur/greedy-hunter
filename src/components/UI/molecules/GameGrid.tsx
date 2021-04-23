import GameGridText from "../atoms/GameGridText";
import GridInputField from "../atoms/GridInputField";

function GameGrid(): JSX.Element {
    return (
        <div className="game-grid">
            <div>
                <GameGridText gameGridText="Game grid" />
            </div>
            <div>
                <GridInputField />
            </div>
        </div>    
    ); 
}

export default GameGrid;
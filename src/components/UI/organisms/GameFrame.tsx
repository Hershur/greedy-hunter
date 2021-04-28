
import AudioElement from "../atoms/AudioElement";
import GameBoard from "../molecules/GameBoard";
import IndicatorFrame from "../molecules/IndicatorFrame";
import MovesFrame from "../molecules/MovesFrame";

function GameFrame(): JSX.Element{
    return (
        <div className="frame game-frame">
            <IndicatorFrame />
            <GameBoard />
            <MovesFrame />
        </div>  
    );
}

export default GameFrame;
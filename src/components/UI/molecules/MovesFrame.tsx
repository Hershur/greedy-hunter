import { useSelector } from "react-redux";
import { IStateProps } from "../../../reducers/rootReducer";
import Moves from "../atoms/Moves";
import SwitchButton from "../atoms/SwitchButton";

function MovesFrame(): JSX.Element{
    const gridValue: number = useSelector<IStateProps, IStateProps["grid"]>((state)=> state.grid);
    const totalMoves: number = useSelector<IStateProps, IStateProps["totalMoves"]>((state)=> state.totalMoves);
    const maxMoves = Math.round((gridValue * gridValue)/2)

    return (
        <div className="frame moves-frame">
            <Moves numberOfMoves={maxMoves} moveDescription="Maximum moves" />
            {/* <SwitchButton /> */}
            <Moves numberOfMoves={totalMoves} moveDescription="Total moves" />
        </div>
    );
}

export default MovesFrame;
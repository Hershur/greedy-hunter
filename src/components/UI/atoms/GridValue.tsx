import { useSelector } from "react-redux";
import { IStateProps } from "../../../reducers/rootReducer";

function GridValue(): JSX.Element {
    const gridValue: number = useSelector<IStateProps, IStateProps["grid"]>((state)=> state.grid);

    return (
        <div className="indicator-frame__div">
            Grid: &nbsp; <strong> {gridValue} x {gridValue}</strong>
        </div>
    );
}

export default GridValue;
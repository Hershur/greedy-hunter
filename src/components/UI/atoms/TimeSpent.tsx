import { useSelector } from "react-redux";
import { IStateProps } from "../../../reducers/rootReducer";

function TimeSpent({timeSpent}: {timeSpent: number}): JSX.Element {
    const gridValue: number = useSelector<IStateProps, IStateProps["grid"]>((state)=> state.grid);

    return (
        <div className="indicator-frame__div">
            Time Spent: &nbsp; <strong> 00:<span id="time-spent">{3*gridValue}</span> secs</strong>
        </div>
    );
}

export default TimeSpent;
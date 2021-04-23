import GridValue from "../atoms/GridValue";
import TimeIndicator from "../atoms/TimeIndicator";
import TimeSpent from "../atoms/TimeSpent";

function IndicatorFrame(): JSX.Element{
    return (
        <div className="frame indicator-frame">
            <GridValue />
            <TimeIndicator />
            <TimeSpent timeSpent={48} />
        </div>  
    );
}

export default IndicatorFrame;
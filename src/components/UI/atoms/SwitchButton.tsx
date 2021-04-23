// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { IStateProps } from "../../../reducers/rootReducer";

function SwitchButton(): JSX.Element {
    // const playSound: boolean = useSelector<IStateProps, IStateProps["playSound"]>((state)=> state.playSound);
    // const dispatch = useDispatch();

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        // dispatch({type:"SET_GAME_SOUND", payload: !playSound});
    }

    return (
        <div>
            <input onChange={handleChange} type="checkbox" id="switch" /><label className="label" htmlFor="switch">
                <div className="label">Hover over me
                    <span className="tooltiptext">Tooltip text</span>
                </div>
            </label>

        </div>
    ); 
}

export default SwitchButton;


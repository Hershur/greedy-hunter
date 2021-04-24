import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStateProps } from "../../../reducers/rootReducer";



function SwitchButton(): JSX.Element {
    const gameSound: boolean = useSelector<IStateProps, IStateProps["gameSound"]>((state)=> state.gameSound);

    const [sound, setSound] = useState(gameSound);
    const dispatch = useDispatch();

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSound(e.currentTarget.checked);
        dispatch({type: "TOGGLE_SOUND", payload: sound});
        console.log('game sound', sound);
    }
    



    return (
        <div>
            <input onChange={handleChange} defaultChecked={sound} type="checkbox" id="switch" />
            <label className="label" htmlFor="switch" title={sound ? "Off Game Sound" : "On Game Sound"}>
            </label>

        </div>
    ); 
}

export default SwitchButton;


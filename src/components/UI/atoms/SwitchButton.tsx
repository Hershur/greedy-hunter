// import { useState } from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { IStateProps } from "../../../reducers/rootReducer";


function SwitchButton(): JSX.Element {
    let gameSound = false;
    // const dispatch = useDispatch();

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        gameSound = e.currentTarget.checked;
        console.log('game sound', e.currentTarget.checked);
    }
    console.log('game sound', gameSound);



    return (
        <div>
            <input onChange={handleChange} defaultChecked={gameSound} type="checkbox" id="switch" />
            <label className="label" htmlFor="switch" title={gameSound ? "Off Game Sound" : "On Game Sound"}>
            </label>

        </div>
    ); 
}

export default SwitchButton;


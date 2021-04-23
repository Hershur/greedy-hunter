import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

type ButtonTextProps = {
    buttonText: string;
};

function StartGameButton({buttonText}: ButtonTextProps): JSX.Element {
    const dispatch = useDispatch();
    const handleClick = (event: React.MouseEvent<HTMLElement>)=>{
        dispatch({type:"START_GAME", payload: true});
    }

    return (
        <Link to="/play">
            <button onClick={handleClick} className="button">{buttonText}</button>
        </Link>
    ); 
}

export default StartGameButton;